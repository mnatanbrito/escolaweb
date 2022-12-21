import React from 'react'

import Panel from '../../shared/components/Panel'
import ListaEscolas from './ListaEscolas'

const MinhasEscolas = () => {
  return (
    <>
      <Panel title="Minhas escolas">
        <ListaEscolas />
      </Panel>

      {/* <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Formik
            validationSchema={schema}
            initialValues={find(
              data,
              (escola) => escola.id === escolaSelecionada
            )}
            onSubmit={(values) => {
              alert(values)
            }}
          >
            {({dirty}) => (
              <Form>
                <ModalHeader>Editar dados</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <EscolaForm />
                </ModalBody>
                <ModalFooter>
                  <HStack spacing="5px">
                    <Button variant="ghost" onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button onClick={onUpdate} type="submit" disabled={!dirty}>
                      Atualizar
                    </Button>
                  </HStack>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal> */}
    </>
  )
}

export default MinhasEscolas
