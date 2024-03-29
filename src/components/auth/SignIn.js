import React, {useContext} from 'react'
import {Flex, Box, Heading, VStack} from '@chakra-ui/react'
import {useMutation} from 'react-query'
import {signInWithEmailAndPassword} from 'firebase/auth'

import SignInForm from './SignInForm'
import AuthContext from './AuthContext'

export default function SignIn() {
  const authContext = useContext(AuthContext)

  const mutation = useMutation((values) =>
    signInWithEmailAndPassword(authContext, values.email, values.senha)
  )

  return (
    <Flex
      flex="1"
      justify="center"
      align="center"
      bg="gray.50"
      borderColor="gray"
      borderWidth={1}
      height="100vh"
    >
      <Box
        width={[
          '85%', // base
          '80%', // 480px upwards
          '75%', // 768px upwards
          '50%', // 992px upwards
        ]}
        height={[
          '35%', // base
          '45%', // 480px upwards
          '55%', // 768px upwards
          '65%', // 992px upwards
        ]}
        display="flex"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        bg="white"
        alignItems="stretch"
        justifyContent="center"
      >
        <Box
          display={{
            base: 'none',
            lg: 'flex',
          }}
          flex="4"
          bg="primaryBlue"
          alignItems="center"
          justifyContent="center"
        >
          <VStack spacing={3}>
            <Heading color="white" textAlign="center">
              Escola Web
            </Heading>

            <Heading color="gray.400" textAlign="center" size="sm">
              O seu sistema de gestão escolar.
            </Heading>
          </VStack>
        </Box>
        <Box
          display="flex"
          flex="8"
          alignItems="center"
          justifyContent="center"
        >
          <SignInForm
            isLoading={mutation.isLoading}
            onSubmit={(signInInfo) => mutation.mutate(signInInfo)}
          />
        </Box>
      </Box>
    </Flex>
  )
}
