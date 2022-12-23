import React from 'react'
import {
  Alert,
  AlertIcon,
  Button,
  HStack,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Skeleton,
} from '@chakra-ui/react'
import {map} from 'lodash'
import {FaEdit, FaHome, FaRedo, FaTrash} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import Pagination from '../../shared/components/Pagination'
import Row from '../../shared/components/Row'
import ConfirmationModal from '../../shared/components/ConfirmationModal'
import useEscolasQuery from './useEscolasQuery'
import useNotification from '../../shared/hooks/useNotification'
import ModalEscolaForm from './ModalEscolaForm'
import useRoles from '../../shared/hooks/useRoles'

const ListaEscolas = () => {
  const {isAdministrador} = useRoles()
  const {success: successNotification, error: errorNotification} =
    useNotification()
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
    deleteEscola,
    updateEscola,
  } = useEscolasQuery()
  const [escolaSelecionada, setEscolaSelecionada] = React.useState(null)
  const {
    isOpen: isDeleteModalOpen,
    onOpen: showDeleteModal,
    onClose: closeDeleteModal,
  } = useDisclosure({
    onClose: () => {
      setEscolaSelecionada(null)
    },
  })
  const {
    isOpen: isFormModalOpen,
    onOpen: showFormModal,
    onClose: closeFormModal,
  } = useDisclosure({
    onClose: () => {
      setEscolaSelecionada(null)
    },
  })

  const onConfirmDelete = (idEscola) => {
    setEscolaSelecionada(idEscola)
    showDeleteModal()
  }

  const onDelete = (idEscola) => {
    deleteEscola(
      idEscola,
      () => {
        successNotification({
          title: 'Sucesso',
          description: 'Escola excluída com sucesso!',
        })
      },
      () => {
        errorNotification({
          title: 'Erro',
          description: 'Erro ao excluir escola!',
        })
      }
    )
  }

  const onEdit = (escola) => {
    setEscolaSelecionada(escola)
    showFormModal()
  }

  const onSubmitEscola = ({type, data}) => {
    if (type === 'update') {
      updateEscola(
        data.id,
        data,
        () => {
          closeFormModal()
          successNotification({
            title: 'Sucesso',
            description: 'Escola atualizada com sucesso!',
          })
        },
        () => {
          errorNotification({
            title: 'Erro',
            description: 'Erro ao atualizar escola!',
          })
        }
      )
    }
  }

  if (isLoading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    )
  }

  if (error) {
    return (
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon />
          Não foi possível carregar a lista de escolas
        </Alert>
        <Button
          rightIcon={<FaRedo />}
          colorScheme="teal"
          variant="link"
          onClick={refetch}
          disabled={isFetching}
          size="sm"
          isLoading={isFetching}
        >
          Carregar novamente
        </Button>
      </Stack>
    )
  }

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Endereço</Th>
            <Th>Opções</Th>
          </Tr>
        </Thead>
        <Tbody>
          <>
            {map(data, (escola) => (
              <Tr key={escola.id}>
                <Td>{escola.nome}</Td>
                <Td>
                  {escola.endereco
                    ? `${escola.endereco.numero}, ${escola.endereco.rua}, ${escola.endereco.bairro}, ${escola.endereco.cidade}`
                    : ''}{' '}
                </Td>
                <Td>
                  <Stack direction="row" spacing={4}>
                    <HStack spacing="15px">
                      <Link to={`/escolas/${escola.slug}`} title={escola.nome}>
                        <IconButton
                          icon={<FaHome />}
                          colorScheme="blue"
                          variant="outline"
                          title="Ir para a página da escola"
                        />
                      </Link>
                      {isAdministrador && (
                        <>
                          <IconButton
                            icon={<FaEdit />}
                            colorScheme="blue"
                            variant="outline"
                            onClick={() => onEdit(escola)}
                            title="Editar dados da escola"
                          />
                          <IconButton
                            icon={<FaTrash />}
                            colorScheme="blue"
                            variant="outline"
                            onClick={() => onConfirmDelete(escola.id)}
                            title="Excluir registro da escola"
                          />
                        </>
                      )}
                    </HStack>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </>
        </Tbody>
      </Table>
      <Row justifyContent="center">
        <Pagination
          hasPrevious={hasPrevious}
          hasNext={hasNext}
          onPrevious={loadPrevious}
          onNext={loadNext}
        />
      </Row>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        data={escolaSelecionada}
        title="Confirmação"
        message="Desejar confirmar a exclusão?"
        onClose={closeDeleteModal}
        onConfirm={onDelete}
      />

      <ModalEscolaForm
        isOpen={isFormModalOpen}
        onClose={closeFormModal}
        onSubmit={onSubmitEscola}
        escola={escolaSelecionada}
      />
    </>
  )
}

export default ListaEscolas
