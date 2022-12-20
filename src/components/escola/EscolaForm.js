import React from 'react'
import {Box} from '@chakra-ui/react'

import InputField from '../../shared/components/InputField'
import FormRow from '../../shared/components/FormRow'
import EnderecoForm from '../../shared/components/EnderecoForm'

export default function EscolaForm() {
  return (
    <>
      <FormRow>
        <Box flex={1}>
          <InputField
            name="nome"
            label="Nome:"
            isRequired
            marginBottom="10px"
          />
        </Box>
      </FormRow>

      <EnderecoForm parentField="endereco" />
    </>
  )
}
