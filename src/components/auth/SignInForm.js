import React from 'react';
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Text,
  Button,
  FormControl,
  FormErrorMessage,
  Link,
  Box,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';

import signInSchema from './signInSchema';
import featureFlags from '../../shared/featureFlags';

const initialValues = {
  email: '',
  senha: '',
};

export default function SignInForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched, values, setFieldValue }) => (
        <Form
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack spacing={3} width={0.8}>
            <Text color="primaryBlue" fontSize="xl">
              Entrar
            </Text>
            <FormControl isInvalid={errors.email && touched.email}>
              <InputGroup>
                <InputLeftElement
                  children={<Icon name="email" color="gray.300" />}
                />
                <Input
                  id="email"
                  aria-describedby="email-helper-text"
                  type="text"
                  placeholder="Email"
                  maxLength={140}
                  value={values.email}
                  onChange={(ev) => setFieldValue('email', ev.target.value)}
                />
              </InputGroup>
              <FormErrorMessage textAlign="right">
                {errors.email}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.senha && touched.senha}>
              <InputGroup>
                <InputLeftElement
                  children={<Icon name="lock" color="gray.300" />}
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={values.senha}
                  maxLength={20}
                  onChange={(ev) => setFieldValue('senha', ev.target.value)}
                />
              </InputGroup>
              <FormErrorMessage textAlign="right">
                {errors.senha}
              </FormErrorMessage>
            </FormControl>

            <Button
              color="white"
              bg="primaryBlue"
              variant="solid"
              isLoading={isSubmitting}
              type="submit"
            >
              Entrar
            </Button>
            {featureFlags.SIGN_UP_ENABLED && (
              <Box
                display="flex"
                flex={1}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Text color="gray.800" fontSize="xs" lineHeight={1}>
                  Ainda não possui uma conta?
                </Text>
                {<>&nbsp;</>}
                <Link color="primaryBlue" fontSize="xs" lineHeight={1}>
                  Cadastre-se
                </Link>
              </Box>
            )}
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
