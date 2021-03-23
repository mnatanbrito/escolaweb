import React from 'react';
import {
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  Stack,
  Button,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getEscolas } from './service';
import { cacheKey } from './constants';

const MinhasEscolas = () => {
  const { isLoading, error, data } = useQuery(cacheKey, getEscolas);

  if (error) return 'Ocorreu um erro ao exibir esse bloco: ' + error.message;

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Endereço</Th>
          <Th>Opções</Th>
        </Tr>
      </Thead>
      <Tbody>
        {isLoading && (
          <Tr>
            <Td colSpan={3}>Carregando...</Td>
          </Tr>
        )}
        {!isLoading && (
          <>
            {map(data, ({ id, nome, endereco }) => (
              <Tr key={id}>
                <Td>{nome}</Td>
                <Td>
                  {endereco
                    ? `${endereco.numero}, ${endereco.rua}, ${endereco.bairro}, ${endereco.cidade}`
                    : ''}{' '}
                </Td>
                <Td>
                  <Stack direction="row" spacing={4}>
                    <Link to={`/escolas/${id}`} title={nome}>
                      <Button
                        leftIcon={<FaHome />}
                        colorScheme="blue"
                        variant="outline"
                      >
                        Dashboard
                      </Button>
                    </Link>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </>
        )}
      </Tbody>
    </Table>
  );
};

export default MinhasEscolas;
