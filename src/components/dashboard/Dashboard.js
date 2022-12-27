import React from 'react'
import {useMutation} from 'react-query'

import {addEscola} from '../escola/service'
import useNotification from '../../shared/hooks/useNotification'
import ContentLayout from '../../shared/components/ContentLayout'
import MinhasEscolas from '../escola/MinhasEscolas'
import AlunosSemEscola from '../aluno/AlunosSemEscola'
import MenuRapido from './MenuRapido'
import FormRow from '../../shared/components/FormRow'
import ModalEscolaForm from '../escola/ModalEscolaForm'

export default function Dashboard() {
  // TODO: remove this solution because it sucks
  const [refresher, setRefresher] = React.useState(0)
  const {success, error} = useNotification()
  const addMutation = useMutation((dadosEscola) => addEscola(dadosEscola))
  const [showEscolaModal, setShowEscolaModal] = React.useState(false)

  const onCommand = (cmd) => {
    switch (cmd) {
      case 'cadastro-escola':
        setShowEscolaModal(true)
        break
      default:
        break
    }
  }
  const onSubmitEscola = ({type, data}) => {
    switch (type) {
      case 'add':
        addMutation.mutate(data, {
          onSuccess: () => {
            setRefresher((prev) => prev + 1)
            success({
              title: 'Sucesso',
              description: 'Escola cadastrada com sucesso!',
            })
          },
          onError: () => {
            error({
              title: 'Erro',
              description: 'Não foi possível cadastrar a escola',
            })
          },
        })
        setShowEscolaModal(false)
        break
      default:
        break
    }
  }
  return (
    <ContentLayout title="Dashboard">
      <FormRow>
        <AlunosSemEscola />
      </FormRow>
      <MenuRapido onClick={onCommand} />
      <MinhasEscolas refresher={refresher} />

      <ModalEscolaForm
        isOpen={showEscolaModal}
        onClose={() => setShowEscolaModal(false)}
        onSubmit={onSubmitEscola}
      />
    </ContentLayout>
  )
}
