import React from 'react'
import {HStack, Button} from '@chakra-ui/react'
import {Formik, Form} from 'formik'
import {useNavigate} from 'react-router-dom'

import {cadastroAluno, defaultNovoAluno} from './schemas'
import {addAluno} from './service'
import {PaisFormSection, ResponsavelForm} from './paisResponsaveis'
import useNotification from '../../shared/hooks/useNotification'
import ContentLayout from '../../shared/components/ContentLayout'
import Panel from '../../shared/components/Panel'
import AlunoForm from './AlunoForm'

export default function CadastroAluno() {
  const {success, error} = useNotification()
  const navigation = useNavigate()

  const onCadastrar = async (dadosAluno, actions) => {
    try {
      await addAluno(dadosAluno)

      actions.resetForm(defaultNovoAluno)

      success({
        title: 'Sucesso',
        description: 'Aluno cadastrado com sucesso.',
        onCloseComplete: () => {
          navigation(-1)
        },
      })
    } catch (err) {
      error({
        title: 'Erro',
        description: 'Erro ao tentar cadastrar o aluno.',
      })
    }
  }

  const onCancel = React.useCallback(() => navigation(-1), [])

  return (
    <ContentLayout title="Cadastro de Aluno" pt="5">
      <Formik
        validationSchema={cadastroAluno}
        initialValues={defaultNovoAluno}
        onSubmit={onCadastrar}
      >
        {({dirty, isSubmitting, errors}) => (
          <Form>
            <Panel title="Dados do Aluno" mt="5">
              <AlunoForm />
            </Panel>

            {/* <Panel title="Dados sobre os pais">
              <PaisFormSection />
            </Panel>*/}

            <Panel title="Dados sobre o responsável">
              <ResponsavelForm />
            </Panel>

            <HStack spacing="5" mt="8" mb={7} justifyContent="center">
              <Button variant="ghost" colorScheme="blue" onClick={onCancel}>
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="solid"
                colorScheme="blue"
                disabled={!dirty || isSubmitting}
                isLoading={isSubmitting}
              >
                Cadastrar
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </ContentLayout>
  )
}
