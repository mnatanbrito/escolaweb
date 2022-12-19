import React from 'react'
import {HStack, Button} from '@chakra-ui/react'
import {Formik, Form} from 'formik'
import {useNavigate} from 'react-router-dom'
import {useMutation} from 'react-query'

import {cadastroAluno, converter, defaultNovoAluno} from './schemas'
import {addAluno} from './service'
import useNotification from '../../shared/hooks/useNotification'
import ContentLayout from '../../shared/components/ContentLayout'
import Panel from '../../shared/components/Panel'
import AlunoForm from './AlunoForm'

export default function CadastroAluno() {
  const mutation = useMutation((dadosAluno) => {
    return addAluno(dadosAluno)
  })
  const {success, error} = useNotification()
  const navigation = useNavigate()

  const onCadastrar = async (dadosAluno, actions) => {
    try {
      const aluno = cadastroAluno.cast(dadosAluno)
      // existe algum outro aluno com o mesmo CPF?
      await mutation.mutate(converter(aluno))

      actions.resetForm(defaultNovoAluno)

      success({
        title: 'Sucesso',
        description: 'Aluno cadastrado com sucesso.',
        onCloseComplete: () => {
          navigation(-1)
        },
      })
    } catch (err) {
      // TODO: improve error message when CPF already exists
      console.error('Erro ao cadastrar aluno', {
        err,
      })
      mutation.reset()
      actions.setSubmitting(false)
      error({
        title: 'Erro',
        description:
          'Erro ao tentar cadastrar o aluno. Por favor, tente novamente mais tarde!',
      })
    }
  }

  const onCancel = React.useCallback(() => navigation(-1), [navigation])

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
