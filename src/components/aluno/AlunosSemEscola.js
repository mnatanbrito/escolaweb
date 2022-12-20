import {StatGroup, Stat, StatLabel, StatNumber, Spinner} from '@chakra-ui/react'
import {useQuery} from 'react-query'

import {getAlunosSemEscola} from './service'

const AlunosSemEscola = () => {
  const {isLoading, error, data} = useQuery(['alunos-sem-escola'], () =>
    getAlunosSemEscola()
  )

  return (
    <StatGroup>
      {!error && (
        <Stat>
          {isLoading && <Spinner size="sm" />}
          {!isLoading && (
            <>
              <StatLabel>Alunos sem escola</StatLabel>
              <StatNumber>{(data || []).length}</StatNumber>
            </>
          )}
        </Stat>
      )}
    </StatGroup>
  )
}

export default AlunosSemEscola
