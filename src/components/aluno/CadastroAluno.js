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
  naturalidade: 'Carolina',
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
    <ContentLayout title="Cadastro de Aluno">
      <Panel title="Dados do Aluno">
        <Formik
          validationSchema={cadastroAluno}
          initialValues={novoAlunoDefault}
          onSubmit={onCadastrar}
        >
          {({handleSubmit, handleChange, dirty, isValid}) => (
            <Form onSubmit={handleSubmit} noValidate>
              <AlunoForm handleChange={handleChange} />
              <HStack spacing="5px">
                <Button variant="ghost" onClick={() => null}>
                  Cancelar
                </Button>
                <Button type="submit" disabled={!dirty || !isValid}>
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
