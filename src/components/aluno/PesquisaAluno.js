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
import ListaAlunos from './ListaAlunos'
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

const items = [
  {
    label: 'CPF',
    value: 'cpf',
  },
]
const defaultValue = {
  tipoPesquisa: items[0].value,
  nome: null,
  cpf: null,
}

const PesquisaAluno = () => {
  const {results, search, isFetching, isLoading, error} =
    usePesquisaAlunosQuery()
  const onSubmit = ({tipoPesquisa, nome, cpf}, actions) => {
    const searchParams = tipoPesquisa === 'cpf' ? removeNonDigits(cpf) : nome
    search(tipoPesquisa, searchParams)
  }

  const hasResults = (results || []).length > 0

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
            {hasResults && (
              <Panel title="Alunos encontrados">
                <ListaAlunos
                  alunos={results}
                  error={error}
                  isLoading={isLoading}
                  commands={['view']}
                />
              </Panel>
            )}
          </>
        )}
      </Formik>
    </ContentLayout>
  )
}

export default PesquisaAluno
