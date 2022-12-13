import {
  IconButton,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react'
import {DeleteIcon} from '@chakra-ui/icons'
import {map} from 'lodash'

const PaisResponsaveisTable = ({
  onRemove = () => null,
  items = [],
  emptyTextMessage = '',
}) => (
  <Table variant="simple">
    {items.length === 0 && <TableCaption>{emptyTextMessage}</TableCaption>}

    <Thead>
      <Tr>
        <Th>Nome</Th>
        <Th>Telefone contato</Th>
        <Th>Profissão</Th>
        <Th>Ações</Th>
      </Tr>
    </Thead>
    <Tbody>
      {map(items, (item, index) => (
        <Tr key={item.id}>
          <Td>{item.nome}</Td>
          <Td>{item.dadosContato && item.dadosContato.numero}</Td>
          <Td>{item.profissão}</Td>
          <Td>
            <IconButton
              aria-label="Editar pai ou responsável"
              icon={<DeleteIcon />}
              onClick={() => onRemove(index)}
            />
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

export default PaisResponsaveisTable
