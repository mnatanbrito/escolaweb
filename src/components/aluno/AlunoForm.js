import {HStack, Box, Container} from '@chakra-ui/react'

import {maskDateString} from '../../shared/utils/dates'
import {maskCpf} from '../../shared/utils/strings'
import InputField from '../../shared/components/InputField'

export default function AlunoForm({handleChange}) {
  return (
    <Container maxW="full">
      {/* row 1 */}
      <HStack spacing={3} mb="5">
        <Box flex={8}>
          <InputField
            name="nome"
            label="Nome:"
            onChange={handleChange}
            maxLength={100}
          />
        </Box>
        <Box flex={4}>
          <InputField
            name="dataNascimento"
            label="Data de Nascimento:"
            onChange={handleChange}
            maxLength={10}
            mask={maskDateString}
          />
        </Box>
      </HStack>

      {/* row 2 */}
      <HStack spacing={3} mb="5">
        <Box flex={6}>
          <InputField
            name="nacionalidade"
            label="Nacionalidade:"
            onChange={handleChange}
            maxLength={100}
          />
        </Box>
        <Box flex={6}>
          <InputField
            name="naturalidade"
            label="Naturalidade:"
            onChange={handleChange}
            maxLength={100}
          />
        </Box>
      </HStack>

      {/* row 3 */}
      <HStack spacing={3} mb="5">
        <Box flex={3}>
          <InputField
            name="dadosRg.rg"
            label="RG:"
            onChange={handleChange}
            maxLength={100}
          />
        </Box>
        <Box flex={3}>
          <InputField
            name="dadosRg.orgaoEmissor"
            label="Órgão Emissor:"
            onChange={handleChange}
            maxLength={100}
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="dadosRg.dataEmissao"
            label="Data Emissão:"
            onChange={handleChange}
            maxLength={10}
            mask={maskDateString}
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="cpf"
            label="CPF:"
            onChange={handleChange}
            maxLength={14}
            mask={maskCpf}
          />
        </Box>
      </HStack>
    </Container>
  )
}
