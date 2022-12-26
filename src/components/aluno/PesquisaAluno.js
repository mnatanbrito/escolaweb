import {Box, Button} from '@chakra-ui/react'
import {Formik, Form} from 'formik'
import {FaSearch} from 'react-icons/fa'
import {object, string} from 'yup'

import ContentLayout from '../../shared/components/ContentLayout'
import FormRow from '../../shared/components/FormRow'
import InputField from '../../shared/components/InputField'
import Panel from '../../shared/components/Panel'
import SelectField from '../../shared/components/SelectField'

const formularioPesquisaSchema = object().shape({
  texto: string().notRequired().nullable(true),
  tipoPesquisa: string().required().nullable(false),
})

const defaultValue = {
  texto: '',
  tipoPesquisa: 'nome',
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
  const onSubmit = (values, actions) => {}

  return (
    <ContentLayout title="Pesquisa">
      <Panel title="Parâmetros de pesquisa">
        <Formik
          validationSchema={formularioPesquisaSchema}
          initialValues={defaultValue}
          onSubmit={onSubmit}
        >
          {({values}) => (
            <Form>
              <FormRow alignItems="flex-end">
                <Box flex={8}>
                  <InputField
                    name="texto"
                    label={values.tipoPesquisa === 'cpf' ? 'CPF:' : 'Nome:'}
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
                    onClick={() => console.info('Pesquisando aluno')}
                    title="Pesquisar um aluno"
                    type="submit"
                  >
                    Pesquisar
                  </Button>
                </Box>
              </FormRow>
            </Form>
          )}
        </Formik>
      </Panel>
    </ContentLayout>
  )
}

export default PesquisaAluno
