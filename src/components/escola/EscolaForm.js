import React from 'react';
import { map } from 'lodash';
import { Box, HStack } from '@chakra-ui/react';

import SelectField from '../../shared/components/SelectField';
import InputField from '../../shared/components/InputField';
import estados from '../../shared/data/estados';

export default function EscolaForm({ handleChange }) {
  return (
    <>
      <InputField
        name="nome"
        label="Nome:"
        isRequired
        onChange={handleChange}
        marginBottom="10px"
      />

      <HStack spacing="15px">
        <Box w="80%">
          <InputField
            name="endereco.rua"
            label="Rua:"
            isRequired
            onChange={handleChange}
            marginBottom="10px"
          />
        </Box>
        <Box>
          <InputField
            name="endereco.numero"
            label="Número:"
            isRequired
            onChange={handleChange}
            marginBottom="10px"
          />
        </Box>
      </HStack>

      <InputField
        name="endereco.complemento"
        label="Complemento:"
        onChange={handleChange}
        marginBottom="10px"
      />
      <HStack spacing="15px">
        <Box w="80%">
          <InputField
            name="endereco.cidade"
            label="Cidade:"
            isRequired
            onChange={handleChange}
            marginBottom="10px"
          />
        </Box>
        <Box>
          <SelectField
            name="estado"
            items={map(estados, (estado) => ({
              label: estado.nome,
              value: estado.sigla,
            }))}
            onChange={handleChange}
            label="Estado:"
            marginBottom="10px"
            isRequired
          />
        </Box>
      </HStack>
    </>
  );
}
