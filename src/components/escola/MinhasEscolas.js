import React, {useState} from 'react'
import {
  Stack,
  Button,
  Skeleton,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react'
import {find} from 'lodash'
import {Formik, Form} from 'formik'

import {cadastroEscola as schema} from './schemas'
import EscolaForm from './EscolaForm'
import Panel from '../../shared/components/Panel'
import ListaEscolas from './ListaEscolas'
import useEscolasQuery from './useEscolasQuery'

const MinhasEscolas = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {
    isFetching,
    isLoading,
    error,
    data,
    refetch,
    hasPrevious,
    hasNext,
    loadPrevious,
    loadNext,
  } = useEscolasQuery()
  const [escolaSelecionada, setEscolaSelecionada] = useState()

  const onEditEscola = (idEscola) => {
    setEscolaSelecionada(idEscola)
    onOpen()
  }

  const onUpdate = () => {}

  if (isLoading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    )
  }

  return (
    <>
      <Panel title="Minhas escolas">
        <ListaEscolas
          isFetching={isFetching}
          isLoading={isLoading}
          error={error}
          data={data}
          refetch={refetch}
          onEdit={onEditEscola}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          loadPrevious={loadPrevious}
          loadNext={loadNext}
        />
      </Panel>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
      </Modal>
    </>
  )
}

export default MinhasEscolas
