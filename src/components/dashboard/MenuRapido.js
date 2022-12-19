import React from 'react'
import {HStack, Button} from '@chakra-ui/react'
import {FaPlusCircle, FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router'

import useEnv from '../../shared/hooks/useEnv'

export default function MenuRapido() {
  const {isDev} = useEnv()
  const navigation = useNavigate()

  return (
    <HStack
      direction="row"
      justifyContent="flex-end"
      spacing={4}
      justify="flex-end"
      mb={7}
      width="100%"
      marginTop="5"
    >
      {isDev && (
        <Button
          colorScheme="blue"
          aria-label="Pesquisar aluno"
          variant="solid"
          leftIcon={<FaSearch />}
          onClick={() =>
            navigation({
              pathname: '/alunos/pesquisa',
            })
          }
          title="Pesquisar um aluno"
        >
          Pesquisar aluno
        </Button>
      )}

      <Button
        colorScheme="blue"
        aria-label="Cadastrar aluno"
        variant="solid"
        leftIcon={<FaPlusCircle />}
        onClick={() =>
          navigation({
            pathname: '/alunos/cadastro',
          })
        }
        title="Cadastrar um novo aluno"
      >
        Cadastrar aluno
      </Button>
    </HStack>
  )
}
