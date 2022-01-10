import {HStack, Box, Container, Text} from '@chakra-ui/react'
import {map} from 'lodash'

import {maskDateString} from '../../shared/utils/dates'
import {maskCpf} from '../../shared/utils/strings'
import estados from '../../shared/data/estados'
import InputField from '../../shared/components/InputField'
import SelectField from '../../shared/components/SelectField'

const FormRow = ({children, ...rest}) => {
  return (
    <HStack spacing={3} mb="5" alignItems="flex-start" {...rest}>
      {children}
    </HStack>
  )
}

export default function AlunoForm({handleChange}) {
  return (
    <Container maxW="full">
      {/* row 1 */}
      <FormRow>
        <Box flex={8}>
          <InputField
            name="nome"
            label="Nome:"
            onChange={handleChange}
            maxLength={100}
            isRequired
          />
        </Box>
        <Box flex={4}>
          <InputField
            name="dataNascimento"
            label="Data de Nascimento:"
            onChange={handleChange}
            maxLength={10}
            mask={maskDateString}
            isRequired
          />
        </Box>
      </FormRow>

      {/* row 2 */}
      <FormRow>
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
      </FormRow>

      {/* row 3 */}
      <FormRow mb="7">
        <Box flex={3}>
          <InputField
            name="dadosRg.rg"
            label="RG:"
            onChange={handleChange}
            maxLength={100}
            isRequired
          />
        </Box>
        <Box flex={3}>
          <InputField
            name="dadosRg.orgaoEmissor"
            label="Órgão Emissor:"
            onChange={handleChange}
            maxLength={100}
            isRequired
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="dadosRg.dataEmissao"
            label="Data Emissão:"
            onChange={handleChange}
            maxLength={10}
            mask={maskDateString}
            isRequired
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="cpf"
            label="CPF:"
            onChange={handleChange}
            maxLength={14}
            mask={maskCpf}
            isRequired
          />
        </Box>
      </FormRow>

      {/* row 4 */}
      <Box mt="50px"></Box>

      <FormRow mt="30px">
        <Text fontWeight="semibold">Endereço</Text>
      </FormRow>

      <FormRow>
        <Box flex={3}>
          <InputField
            name="endereco.rua"
            label="Rua:"
            onChange={handleChange}
            maxLength={100}
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="endereco.bairro"
            label="Bairro:"
            onChange={handleChange}
            maxLength={100}
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="endereco.numero"
            label="Número:"
            onChange={handleChange}
            maxLength={6}
          />
        </Box>
      </FormRow>

      <FormRow>
        <Box flex={3}>
          <InputField
            name="endereco.complemento"
            label="Complemento:"
            onChange={handleChange}
            maxLength={6}
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="endereco.cidade"
            label="Cidade:"
            onChange={handleChange}
            maxLength={6}
          />
        </Box>

        <Box flex={3}>
          <SelectField
            name="endereco.estado"
            items={map(estados, (estado) => ({
              label: estado.nome,
              value: estado.sigla,
            }))}
            onChange={handleChange}
            label="Estado:"
            isRequired
          />
        </Box>
      </FormRow>
    </Container>
  )
}
