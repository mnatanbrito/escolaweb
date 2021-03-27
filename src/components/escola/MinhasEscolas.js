import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  Stack,
  Button,
  Alert,
  AlertIcon,
  Skeleton,
  IconButton,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { FaHome, FaRedo, FaEdit } from 'react-icons/fa';
import { map, find } from 'lodash';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Formik, Form } from 'formik';

import { getEscolas } from './service';
import { cacheKey } from './constants';
import { cadastroEscola as schema } from './schemas';
import EscolaForm from './EscolaForm';
import Panel from '../../shared/components/Panel';

const MinhasEscolas = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFetching, isLoading, error, data, refetch } = useQuery(
    cacheKey,
    getEscolas
  );
  const [escolaSelecionada, setEscolaSelecionada] = useState();

  const onEditEscola = (idEscola) => {
    setEscolaSelecionada(idEscola);
    onOpen();
  };

  const onUpdate = () => {};

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
    );
  }

  return (
    <>
      <Panel title="Minhas escolas">
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
                      <HStack spacing="15px">
                        <Link to={`/escolas/${id}`} title={nome}>
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
                          onClick={() => onEditEscola(id)}
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
              alert(values);
            }}
          >
            {({ handleSubmit, handleChange, dirty }) => (
              <Form onSubmit={handleSubmit}>
                <ModalHeader>Editar dados</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <EscolaForm
                    id={escolaSelecionada}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                  />
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
  );
};

export default MinhasEscolas;
