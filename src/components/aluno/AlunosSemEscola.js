import {useQuery} from 'react-query'

import {getAlunosSemEscola} from './service'
import Panel from '../../shared/components/Panel'
import ListaAlunos from './ListaAlunos'

const AlunosSemEscola = () => {
  const {isLoading, error, data} = useQuery(['alunos-sem-escola'], () =>
    getAlunosSemEscola()
  )

  return (
    <Panel title="Alunos sem escola">
      <ListaAlunos
        isLoading={isLoading}
        error={error}
        alunos={data}
        emptyMessage="Nenhum aluno sem escola registrado"
      />
    </Panel>
  )
}

export default AlunosSemEscola
