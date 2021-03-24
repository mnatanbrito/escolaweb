import React, { useContext } from 'react';
import { Flex, Box, Stack, Heading } from '@chakra-ui/react';

import SignInForm from './SignInForm';
import AuthContext from './AuthContext';

export default function SignIn() {
  const authContext = useContext(AuthContext);

  const onSubmit = async ({ email, senha }) => {
    try {
      await authContext.signInWithEmailAndPassword(email, senha);
    } catch (err) {
      console.log(`ocorreu um erro ao realizar o sign in: ${err.message}`);
    }
  };
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
            md: 'flex',
          }}
          flex="4"
          bg="primaryBlue"
          alignItems="center"
          justifyContent="center"
        >
          <Stack spacing={8}>
            <Heading boxSize="lg" color="white" textAlign="center">
              Escola Web
            </Heading>
            <Heading boxSize="sm" color="gray.400" textAlign="center">
              O seu sistema de gestão escolar.
            </Heading>
          </Stack>
        </Box>
        <Box
          display="flex"
          flex="8"
          alignItems="center"
          justifyContent="center"
        >
          <SignInForm onSubmit={onSubmit} />
        </Box>
      </Box>
    </Flex>
  );
}
