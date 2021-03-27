import React from 'react';
import {
  Flex,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { FaArrowLeft } from 'react-icons/fa';

import { cacheKey } from './constants';
import { getEscola } from './service';
import Container from '../../shared/components/Container';
import ListaAlunos from '../aluno/ListaAlunos';

export default function Dashboard() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery([cacheKey, id], () =>
    getEscola(id)
  );

  return (
    <Flex flex={1} flexDirection="column">
      <Flex bg="blue.600" height="180px" p={3}>
        <Container>
          {data && <Heading color="white">{data.nome}</Heading>}
        </Container>
      </Flex>
      <Flex p={3}>
        <Container>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/dashboard" title="Voltar para a tela inicial">
                <Button
                  colorScheme="blue"
                  variant="outline"
                  leftIcon={<FaArrowLeft />}
                >
                  Voltar
                </Button>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Flex>
      <Flex flex={1} flexGrow={1} p={3}>
        <Container>
          {error && (
            <Alert status="error">
              <AlertIcon />
              Ocorreu um erro ao carregar essa página!
            </Alert>
          )}
          {!error && (
            <>
              {isLoading && <Spinner />}
              {!isLoading && (
                <Tabs variant="enclosed">
                  <TabList>
                    <Tab>Alunos</Tab>
                    <Tab>Professores</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <ListaAlunos idEscola={id} />
                    </TabPanel>
                    <TabPanel>
                      <p>Professores!</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              )}
            </>
          )}
        </Container>
      </Flex>
    </Flex>
  );
}
