import React from 'react'
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
} from '@chakra-ui/react'
import {useParams, Link} from 'react-router-dom'
import {useQuery} from 'react-query'
import {FaArrowLeft} from 'react-icons/fa'

import {cacheKey} from './constants'
import {cacheKey as alunosCacheKey} from '../aluno/constants'
import {getEscolaBySlug} from './service'
import {getAlunos, getAlunosByEscola} from '../aluno/service'
import Container from '../../shared/components/Container'
import ListaAlunos from '../aluno/ListaAlunos'

export default function Dashboard() {
  const {slug} = useParams()
  const {
    isLoading,
    error,
    data: escola,
  } = useQuery([cacheKey, slug], () => getEscolaBySlug(slug))

  const alunos = escola?.alunos || []

  const {
    error: errorAlunos,
    isLoading: isLoadingAlunos,
    data: alunosDaEscola,
  } = useQuery([cacheKey, alunosCacheKey], () => getAlunos(alunos), {
    enabled: (alunos || []).length > 0,
  })

  return (
    <Flex flex={1} flexDirection="column">
      <Flex bg="blue.600" height="180px" p={3}>
        <Container>
          {escola && <Heading color="white">{escola.nome}</Heading>}
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
                <Tabs variant="enclosed" flex={1}>
                  <TabList>
                    <Tab>Alunos</Tab>
                    <Tab>Professores</Tab>
                    <Tab>Turmas</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <ListaAlunos
                        isLoading={isLoadingAlunos}
                        error={errorAlunos}
                        alunos={alunosDaEscola}
                      />
                    </TabPanel>
                    <TabPanel>
                      <p>Professores!</p>
                    </TabPanel>
                    <TabPanel></TabPanel>
                  </TabPanels>
                </Tabs>
              )}
            </>
          )}
        </Container>
      </Flex>
    </Flex>
  )
}
