import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import {Form, Formik} from 'formik'
import EscolaForm from './EscolaForm'

import {cadastroEscola, converter, defaultCadastroEscola} from './schemas'

const ModalEscolaForm = ({
  isOpen,
  escola = defaultCadastroEscola,
  onClose,
  onSubmit,
}) => {
  const isUpdate = escola !== defaultCadastroEscola
  const modalTitle = isUpdate ? 'Editar escola' : 'Adicionar escola'

  const onLocalSubmit = (values, actions) => {
    try {
      const castedEscola = cadastroEscola.cast(values)

      onSubmit({
        type: isUpdate ? 'update' : 'add',
        data: converter(castedEscola),
      })
      actions.resetForm()
    } catch (err) {
      console.error(`Erro ao ${isUpdate ? 'atualizar' : 'cadastrar'} escola`, {
        err,
      })
      actions.setSubmitting(false)
    }
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Formik
          validationSchema={cadastroEscola}
          initialValues={escola}
          onSubmit={onLocalSubmit}
        >
          {({dirty}) => (
            <Form>
              <ModalHeader>{modalTitle}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <EscolaForm />
              </ModalBody>
              <ModalFooter>
                <HStack spacing="5px">
                  <Button variant="ghost" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={!dirty}>
                    {isUpdate ? 'Atualizar' : 'Cadastrar'}
                  </Button>
                </HStack>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  )
}

export default ModalEscolaForm
