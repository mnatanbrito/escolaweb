import React from 'react'
import {HStack, Button} from '@chakra-ui/react'
import {Formik, Form} from 'formik'

import ContentLayout from '../../shared/components/ContentLayout'
import Panel from '../../shared/components/Panel'
import {cadastroAluno} from './schemas'
import AlunoForm from './AlunoForm'

const novoAlunoDefault = {
  nome: '',
  dataNascimento: '',

  nacionalidade: '',
  naturalidade: '',

  dadosRg: {
    rg: '',
    orgaoEmissor: '',
    dataEmissao: '',
  },

  endereco: {
    numero: 224,
    rua: '1 Old Mill Drive',
    bairro: 'York',
    cidade: 'Toronto',
    estado: {
      nome: 'Maranhão',
      sigla: 'MA',
    },
  },
}

export default function CadastroAluno() {
  const onCadastrar = (dadosAluno, actions) => {
    alert(JSON.stringify(dadosAluno))

    actions.resetForm(novoAlunoDefault)
  }

  return (
    <ContentLayout title="Cadastro de Aluno" pt="5">
      <Panel title="Dados do Aluno" mt="5">
        <Formik
          validationSchema={cadastroAluno}
          initialValues={novoAlunoDefault}
          onSubmit={onCadastrar}
        >
          {({handleSubmit, handleChange, dirty, isValid, isSubmitting}) => (
            <Form onSubmit={handleSubmit} noValidate>
              <AlunoForm handleChange={handleChange} />
              <HStack spacing="5" mt="8" justifyContent="center">
                <Button variant="ghost" onClick={() => null}>
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  disabled={!dirty || !isValid || isSubmitting}
                  isLoading={isSubmitting}
                >
                  Cadastrar
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Panel>
    </ContentLayout>
  )
}
