import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Button,
  Alert,
  AlertIcon,
  Skeleton,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { map } from 'lodash';
import { useQuery } from 'react-query';
import { FaHome, FaRedo, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { cacheKey } from './constants';
import { getAlunos } from './service';

export default function ListaAlunos({ idEscola }) {
  const { isLoading, isFetching, data, error, refetch } = useQuery(
    [idEscola, cacheKey],
    () => getAlunos(idEscola)
  );

  if (isLoading) {
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );
  }

  if (error) {
    return (
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon />
          Não foi possível carregar a lista de alunos
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
    );
  }

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
        <>
          {map(data, ({ id, nome, email }) => (
            <Tr key={id}>
              <Td>{nome}</Td>
              <Td></Td>
              <Td>
                <Stack direction="row" spacing={4}>
                  <HStack spacing="15px">
                    <Link to={`/escolas/${idEscola}/alunos/${id}`} title={nome}>
                      <IconButton
                        icon={<FaHome />}
                        colorScheme="blue"
                        variant="outline"
                        title="Ir para a página do aluno"
                      />
                    </Link>
                    <IconButton
                      icon={<FaEdit />}
                      colorScheme="blue"
                      variant="outline"
                      title="Editar dados do aluno"
                    />
                  </HStack>
                </Stack>
              </Td>
            </Tr>
          ))}
        </>
      </Tbody>
    </Table>
  );
}
