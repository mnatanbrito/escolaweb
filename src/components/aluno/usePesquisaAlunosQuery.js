import React from 'react'
import {useQuery} from 'react-query'
import {getAlunosByCPF, getAlunosByNome} from './service'

const cacheKey = 'pesquisa-alunos'

const take = 10

const usePesquisaAlunosQuery = () => {
  const [queryParams, setQueryParams] = React.useState({
    tipoPesquisa: 'nome',
    texto: '',
    page: 0,
  })

  const [lastResult, setLastResult] = React.useState(null)
  const {isFetching, isLoading, error, refetch, data} = useQuery(
    [cacheKey, queryParams.tipoPesquisa, queryParams.page],
    () =>
      queryParams.tipoPesquisa === 'cpf'
        ? getAlunosByCPF({
            cpf: queryParams.texto,
            skip: queryParams.page * take,
            take,
            lastVisible: lastResult,
          })
        : getAlunosByNome({
            nome: queryParams.texto,
            skip: queryParams.page * take,
            take,
            lastVisible: lastResult,
          }),
    {
      enabled: !!queryParams.tipoPesquisa && !!queryParams.texto,
      keepPreviousData: true,
    }
  )

  const {hasNext, results, lastVisible} = data || {}

  React.useEffect(() => {
    if (lastVisible !== lastResult) {
      setLastResult(lastVisible)
    }
  }, [lastVisible, lastResult])

  const loadPrevious = () => {
    setQueryParams((previous) => ({
      ...previous,
      page: previous.page - 1,
    }))
  }

  const loadNext = () => {
    setQueryParams((previous) => ({
      ...previous,
      page: previous.page + 1,
    }))
  }

  const search = (tipoPesquisa, texto) => {
    setQueryParams((prev) => ({
      ...prev,
      tipoPesquisa,
      texto,
    }))
  }

  return {
    hasPrevious: queryParams.page > 0,
    hasNext,
    isFetching,
    isLoading,
    error,
    results: results || [],
    loadPrevious,
    loadNext,
    refetch,
    search,
  }
}

export default usePesquisaAlunosQuery
