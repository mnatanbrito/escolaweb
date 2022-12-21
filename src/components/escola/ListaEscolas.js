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
import useUserInfoContext from '../auth/useUserInfoContext'

const ListaEscolas = () => {
  const {email} = useUserInfoContext()
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
  } = useEscolasQuery()
  const [escolaSelecionada, setEscolaSelecionada] = React.useState(null)
  const {
    isOpen,
    onOpen: showModal,
    onClose: closeModal,
  } = useDisclosure({
    onClose: () => {
      setEscolaSelecionada(null)
    },
  })
  const onConfirmDelete = (idEscola) => {
    setEscolaSelecionada(idEscola)
    showModal()
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

  const onEdit = (idEscola) => {
    // TODO: implement edit modal
    console.info(`Editando escola ${idEscola}`)
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
            {map(data, ({id, slug, nome, endereco}) => (
              <Tr key={id}>
                <Td>{nome}</Td>
                <Td>
                  {endereco
                    ? `${endereco.numero}, ${endereco.rua}, ${endereco.bairro}, ${endereco.cidade}`
                    : ''}{' '}
                </Td>
                <Td>
                  <Stack direction="row" spacing={4}>
                    <HStack spacing="15px">
                      <Link to={`/escolas/${slug}`} title={nome}>
                        <IconButton
                          icon={<FaHome />}
                          colorScheme="blue"
                          variant="outline"
                          title="Ir para a página da escola"
                        />
                      </Link>
                      {/** I know what I'm doing here. I'll refactor it later */}
                      {email === 'mnatan.brito@gmail.com' && (
                        <>
                          <IconButton
                            icon={<FaEdit />}
                            colorScheme="blue"
                            variant="outline"
                            onClick={() => onEdit(id)}
                            title="Editar dados da escola"
                          />
                          <IconButton
                            icon={<FaTrash />}
                            colorScheme="blue"
                            variant="outline"
                            onClick={() => onConfirmDelete(id)}
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
        isOpen={isOpen}
        data={escolaSelecionada}
        title="Confirmação"
        message="Desejar confirmar a exclusão?"
        onClose={closeModal}
        onConfirm={onDelete}
      />
    </>
  )
}

export default ListaEscolas
