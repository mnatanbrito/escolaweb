import React from 'react'
import {useQuery} from 'react-query'

import {cacheKey} from './constants'
import {getEscolas} from './service'

const take = 3

const useEscolasQuery = () => {
  const [page, setPage] = React.useState(0)
  const [lastEscola, setLastEscola] = React.useState(null)
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
  }
}
export default useEscolasQuery
