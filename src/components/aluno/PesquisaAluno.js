import {Box, Button} from '@chakra-ui/react'
import {Formik, Form} from 'formik'
import {FaSearch} from 'react-icons/fa'
import {object, string} from 'yup'

import ContentLayout from '../../shared/components/ContentLayout'
import FormRow from '../../shared/components/FormRow'
import InputField from '../../shared/components/InputField'
import Panel from '../../shared/components/Panel'
import SelectField from '../../shared/components/SelectField'
import cpf from '../../shared/schemas/cpf'
import {maskCpf, removeNonDigits} from '../../shared/utils/strings'
import usePesquisaAlunosQuery from './usePesquisaAlunosQuery'

const formularioPesquisaSchema = object().shape({
  tipoPesquisa: string().required().nullable(false),
  nome: string()
    .nullable(true)
    .when('tipoPesquisa', (tipoPesquisa, schema) => {
      return tipoPesquisa === 'nome' ? schema.required() : schema.notRequired()
    }),
  cpf: cpf.nullable(true).when('tipoPesquisa', (tipoPesquisa, schema) => {
    return tipoPesquisa === 'cpf' ? schema.required() : schema.notRequired()
  }),
})

const defaultValue = {
  tipoPesquisa: 'nome',
  nome: null,
  cpf: null,
}

const items = [
  {
    label: 'Nome',
    value: 'nome',
  },
  {
    label: 'CPF',
    value: 'cpf',
  },
]

const PesquisaAluno = () => {
  const {results, search, isFetching, error} = usePesquisaAlunosQuery()
  const onSubmit = ({tipoPesquisa, nome, cpf}, actions) => {
    search(tipoPesquisa, tipoPesquisa === 'cpf' ? removeNonDigits(cpf) : nome)
  }

  return (
    <ContentLayout title="Pesquisa">
      <Formik
        validationSchema={formularioPesquisaSchema}
        initialValues={defaultValue}
        onSubmit={onSubmit}
      >
        {({values, errors}) => (
          <>
            <Panel title="Parâmetros de pesquisa">
              <Form>
                <FormRow alignItems="flex-end">
                  <Box flex={8}>
                    <InputField
                      name={values.tipoPesquisa === 'cpf' ? 'cpf' : 'nome'}
                      label={values.tipoPesquisa === 'cpf' ? 'CPF:' : 'Nome:'}
                      maxLength={values.tipoPesquisa === 'cpf' ? 14 : 100}
                      mask={values.tipoPesquisa === 'cpf' ? maskCpf : null}
                    />
                  </Box>
                  <Box flex={6}>
                    <SelectField
                      name="tipoPesquisa"
                      label="Tipo de pesquisa"
                      items={items}
                    />
                  </Box>
                  <Box flex={3}>
                    <Button
                      colorScheme="blue"
                      aria-label="Pesquisar aluno"
                      variant="solid"
                      leftIcon={<FaSearch />}
                      title="Pesquisar um aluno"
                      type="submit"
                      isLoading={isFetching}
                    >
                      Pesquisar
                    </Button>
                  </Box>
                </FormRow>
              </Form>
            </Panel>
            <Panel title="Alunos encontrados">
              {JSON.stringify(error?.message)}
            </Panel>
          </>
        )}
      </Formik>
    </ContentLayout>
  )
}

export default PesquisaAluno
