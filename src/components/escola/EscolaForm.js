import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useQuery } from 'react-query';

import { cacheKey } from './constants';
import { getEscola } from './service';
import { cadastroEscola as schema } from './schemas';
import FormField from '../../shared/components/FormField';

export default function EscolaForm({ id }) {
  const { data, isLoading } = useQuery([cacheKey, id], () => getEscola(id));

  if (isLoading) {
    return <Text>Carregando</Text>;
  }

  return (
    <Box>
      <Formik validationSchema={schema} initialValues={data}>
        {({ handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <FormField
              name="nome"
              label="Nome:"
              isRequired
              onChange={handleChange}
              marginBottom="10px"
            />

            <HStack spacing="15px">
              <Box w="80%">
                <FormField
                  name="endereco.rua"
                  label="Rua:"
                  isRequired
                  onChange={handleChange}
                  marginBottom="10px"
                />
              </Box>
              <Box>
                <FormField
                  name="endereco.numero"
                  label="Número:"
                  isRequired
                  onChange={handleChange}
                  marginBottom="10px"
                />
              </Box>
            </HStack>

            <FormField
              name="endereco.complemento"
              label="Complemento:"
              onChange={handleChange}
              marginBottom="10px"
            />
            <HStack spacing="15px">
              <Box w="80%">
                <FormField
                  name="endereco.cidade"
                  label="Cidade:"
                  isRequired
                  onChange={handleChange}
                  marginBottom="10px"
                />
              </Box>
              <Box>
                <Text>Develop select field</Text>
              </Box>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
