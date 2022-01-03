import React from 'react'
import {HStack, VStack, Button, Heading} from '@chakra-ui/react'
import {FaPlusCircle} from 'react-icons/fa'
import {useHistory} from 'react-router'

export default function MenuRapido() {
  const history = useHistory()

  const onClick = (routeName) => {
    history.push(routeName)
  }

  return (
    <HStack direction="row" spacing={4} justify="flex-start" mb={5}>
      <VStack alignItems="flex-start">
        <Heading display="block" fontSize="md" color="gray.600">
          Menu rápido
        </Heading>
        <Button
          colorScheme="blue"
          aria-label="Cadastrar aluno"
          variant="outline"
          leftIcon={<FaPlusCircle />}
          onClick={() => onClick('/alunos/cadastro')}
          title="Cadastrar um novo aluno"
        >
          Cadastrar aluno
        </Button>
      </VStack>
    </HStack>
  )
}
