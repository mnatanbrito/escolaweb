import React from 'react'
import {Box, FormControl, Text} from '@chakra-ui/react'
import {map} from 'lodash'

import FormRow from './FormRow'
import InputField from './InputField'
import SelectField from './SelectField'
import estados from '../data/estados'

const EnderecoForm = ({isRequired = false, parentField}) => {
  const fieldPrefix = parentField ? `${parentField}.` : ''
  return (
    <FormControl isRequired={isRequired}>
      <FormRow mt="30px">
        <Text fontWeight="semibold">Endereço</Text>
      </FormRow>

      {/* row 5 */}
      <FormRow>
        <Box flex={3}>
          <InputField
            name={`${fieldPrefix}rua`}
            label="Rua:"
            maxLength={100}
            isRequired
          />
        </Box>

        <Box flex={3}>
          <InputField
            name={`${fieldPrefix}bairro`}
            label="Bairro:"
            maxLength={100}
            isRequired
          />
        </Box>

        <Box flex={3}>
          <InputField
            name={`${fieldPrefix}numero`}
            label="Número:"
            maxLength={6}
          />
        </Box>
      </FormRow>

      {/* row 6 */}
      <FormRow>
        <Box flex={3}>
          <InputField
            name={`${fieldPrefix}complemento`}
            label="Complemento:"
            maxLength={100}
          />
        </Box>

        <Box flex={3}>
          <InputField
            name={`${fieldPrefix}cidade`}
            label="Cidade:"
            maxLength={100}
            isRequired
          />
        </Box>

        <Box flex={3}>
          <SelectField
            name={`${fieldPrefix}estado`}
            items={map(estados, (estado) => ({
              label: estado.nome,
              value: estado.sigla,
            }))}
            // onChange={handleChange}
            label="Estado:"
            isRequired
          />
        </Box>
      </FormRow>
    </FormControl>
  )
}

export default EnderecoForm
