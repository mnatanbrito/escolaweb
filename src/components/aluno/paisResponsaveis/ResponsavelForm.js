import {Container, Box} from '@chakra-ui/react'
import EnderecoForm from '../../../shared/components/EnderecoForm'

import FormRow from '../../../shared/components/FormRow'
import InputField from '../../../shared/components/InputField'

const ResponsavelForm = () => {
  return (
    <Container maxW="full">
      <FormRow>
        <Box flex={8}>
          <InputField
            name="responsavel.nome"
            label="Nome:"
            maxLength={100}
            isRequired
          />
        </Box>

        <Box flex={4}>
          <InputField
            name="responsavel.profissao"
            label="Profissão:"
            maxLength={100}
            isRequired
          />
        </Box>
      </FormRow>
      <FormRow>
        <Box flex={3}>
          <InputField
            name="responsavel.nacionalidade"
            label="Nacionalidade:"
            maxLength={50}
          />
        </Box>
        <Box flex={3}>
          <InputField
            name="responsavel.naturalidade"
            label="Naturalidade:"
            maxLength={50}
          />
        </Box>
      </FormRow>
      <EnderecoForm parentField="responsavel.endereco" />
    </Container>
  )
}

export default ResponsavelForm
