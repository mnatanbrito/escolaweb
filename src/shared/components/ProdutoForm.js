import {Container, Box, Text, HStack, Button} from '@chakra-ui/react'
import {Formik, Form} from 'formik'

import {maskDateString} from '../utils/dates'
import produtoSchema from '../schemas/produto'
import ContentLayout from './ContentLayout'
import Panel from './Panel'
import InputField from './InputField'
import FormRow from './FormRow'
import EnderecoForm from './EnderecoForm'

const CadastroProduto = () => {
  return (
    <Formik
      validationSchema={produtoSchema}
      initialValues={{
        title: null,
        description: null,
        dateAdded: null,
        endereco: null,
      }}
      onSubmit={(values, actions) => {
        alert(`Form values: ${JSON.stringify(values)}`)
        actions.resetForm({
          title: null,
          description: null,
        })
      }}
    >
      {({dirty, isValid, errors, isSubmitting}) => (
        <ContentLayout title="Cadastro de Produto" pt="5">
          <Form>
            <Panel title="Dados do Produto" mt="5">
              <Container maxW="full">
                <FormRow>
                  <Box flex={8}>
                    <InputField
                      name="title"
                      label="Title:"
                      maxLength={100}
                      isRequired
                    />
                  </Box>

                  <Box flex={4}>
                    <InputField
                      name="description"
                      label="Description:"
                      maxLength={50}
                    />
                  </Box>
                </FormRow>

                <FormRow>
                  <InputField
                    name="dateAdded"
                    label="Date Added:"
                    maxLength={10}
                    mask={maskDateString}
                    isRequired
                  />
                </FormRow>

                <EnderecoForm parentField="endereco" isRequired />

                <FormRow>
                  <Text>{JSON.stringify(errors)}</Text>
                </FormRow>
              </Container>
            </Panel>

            <HStack spacing="5" mt="8" mb={7} justifyContent="center">
              <Button
                variant="ghost"
                colorScheme="blue"
                onClick={() => {
                  console.info('Cancelling')
                }}
              >
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
        </ContentLayout>
      )}
    </Formik>
  )
}

export default CadastroProduto
