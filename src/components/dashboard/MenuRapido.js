import React from 'react'
import {HStack, Button} from '@chakra-ui/react'
import {FaPlusCircle} from 'react-icons/fa'
import {useNavigate} from 'react-router'

export default function MenuRapido() {
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
