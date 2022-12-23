import React from 'react'
import {useMutation, useQuery} from 'react-query'

import {cacheKey} from './constants'
import {deleteEscola, getEscolas, updateEscola} from './service'

const take = 3

const useEscolasQuery = () => {
  const [page, setPage] = React.useState(0)
  const [lastEscola, setLastEscola] = React.useState(null)
  const deleteMutation = useMutation((idEscola) => deleteEscola(idEscola))
  const updateMutation = useMutation(({idEscola, dadosEscola}) =>
    updateEscola(idEscola, dadosEscola)
  )
  const {isFetching, isLoading, error, data, refetch} = useQuery(
    [cacheKey, page],
    () =>
      getEscolas({
        skip: page * take,
        take,
        lastVisible: lastEscola,
      }),
    {keepPreviousData: true}
  )

  const {hasNext, escolas, lastVisible} = data || {}

  React.useEffect(() => {
    if (lastVisible !== lastEscola) {
      setLastEscola(lastVisible)
    }
  }, [lastEscola, lastVisible])

  const loadPrevious = () => {
    setPage((val) => val - 1)
  }

  const loadNext = () => {
    setPage((val) => val + 1)
  }

  const deleteEscolaMutation = (idEscola, onSuccess, onError) => {
    deleteMutation.mutate(idEscola, {
      onSuccess: () => {
        onSuccess && onSuccess()
        setPage(0)
      },
      onError,
    })
  }

  const updateEscolaMutation = (idEscola, dadosEscola, onSuccess, onError) => {
    updateMutation.mutate(
      {
        idEscola,
        dadosEscola,
      },
      {
        onSuccess: () => {
          onSuccess && onSuccess()
          refetch()
        },
        onError,
      }
    )
  }

  return {
    hasPrevious: page > 0,
    hasNext,
    isFetching,
    isLoading,
    error,
    data: escolas,
    refetch,
    loadPrevious,
    loadNext,
    deleteEscola: deleteEscolaMutation,
    updateEscola: updateEscolaMutation,
  }
}
export default useEscolasQuery
