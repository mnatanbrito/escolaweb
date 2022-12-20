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
} from '@chakra-ui/react'
import {map} from 'lodash'
import {FaEdit, FaHome, FaRedo} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Pagination from '../../shared/components/Pagination'
import Row from '../../shared/components/Row'

const ListaEscolas = ({
  isFetching,
  isLoading,
  error,
  data,
  refetch,
  onEdit,
  hasPrevious,
  hasNext,
  loadPrevious,
  loadNext,
}) => {
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
                      <IconButton
                        icon={<FaEdit />}
                        colorScheme="blue"
                        variant="outline"
                        onClick={() => onEdit(id)}
                        title="Editar dados da escola"
                      />
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
    </>
  )
}

export default ListaEscolas
