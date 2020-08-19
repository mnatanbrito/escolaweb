import { combineReducers } from '@reduxjs/toolkit';

import alunos from '../components/aluno/slice';

const reducers = combineReducers({
  alunos,
});

export default reducers;
