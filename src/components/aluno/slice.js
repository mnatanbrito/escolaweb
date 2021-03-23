import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { map, reduce } from 'lodash';

import { FETCH_ALUNOS } from './actionTypes';
import { listAlunos } from './service';

const initialState = {
  allIds: [],
  byId: {},

  isFetching: false,
  hasFetched: false,
  fetchError: null,
};

const fetchAlunos = createAsyncThunk(
  FETCH_ALUNOS,
  (
    pagingInfo = {
      skip: null,
      take: null,
    },
    thunkApi
  ) => listAlunos(pagingInfo.skip, pagingInfo.take)
);

const alunosSlice = createSlice({
  name: 'alunos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAlunos.pending]: (state) => {
      state.isFetching = true;
      state.hasFetched = false;
      state.fetchError = null;
    },
    [fetchAlunos.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.hasFetched = true;
      state.allIds = [
        ...state.allIds,
        ...map(action.alunos, (aluno) => aluno.id),
      ];
      state.byId = {
        ...state.byId,
        ...reduce(
          action.alunos,
          (acc, curr) => {
            if (!acc[curr.id]) {
              acc[curr.id] = curr;
            }

            return acc;
          },
          {}
        ),
      };
    },
    [fetchAlunos.rejected]: (state, action) => {
      state.isFetching = false;
      state.hasFetched = true;
      state.fetchError = action.error;
    },
  },
});

export default alunosSlice;
