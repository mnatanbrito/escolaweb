import {Box, Container} from '@chakra-ui/react'

import {maskDateString} from '../../shared/utils/dates'
import {maskCpf} from '../../shared/utils/strings'
import {corPeleOptions} from '../../shared/data/corPele'
import InputField from '../../shared/components/InputField'
import RadioField from '../../shared/components/RadioField'
import FormRow from '../../shared/components/FormRow'
import EnderecoForm from '../../shared/components/EnderecoForm'

export default function AlunoForm() {
  return (
    <Container maxW="full">
      <FormRow>
        <Box flex={8}>
          <InputField name="nome" label="Nome:" maxLength={100} isRequired />
        </Box>
        <Box flex={4}>
          <InputField
            name="dataNascimento"
            label="Data de Nascimento:"
            maxLength={10}
            mask={maskDateString}
            isRequired
          />
        </Box>
      </FormRow>

      <FormRow>
        <Box flex={6}>
          <InputField
            name="nacionalidade"
            label="Nacionalidade:"
            maxLength={100}
          />
        </Box>
        <Box flex={6}>
          <InputField
            name="naturalidade"
            label="Naturalidade:"
            maxLength={100}
          />
        </Box>
      </FormRow>

      <FormRow mb="7">
        <Box flex={3}>
          <InputField
            name="dadosRg.rg"
            label="RG:"
            maxLength={100}
            isRequired
          />
        </Box>
        <Box flex={3}>
          <InputField
            name="dadosRg.orgaoEmissor"
            label="Órgão Emissor:"
            maxLength={100}
            isRequired
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="dadosRg.dataEmissao"
            label="Data Emissão:"
            maxLength={10}
            mask={maskDateString}
            isRequired
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="cpf"
            label="CPF:"
            maxLength={14}
            mask={maskCpf}
            isRequired
          />
        </Box>
      </FormRow>

      <FormRow>
        <Box flex={3}>
          <InputField name="email" label="Email:" maxLength={100} />
        </Box>
      </FormRow>

      <FormRow>
        <Box flex={4}>
          <RadioField
            name="corPele"
            label="Cor da pele"
            options={corPeleOptions}
          />
        </Box>

        <Box flex={3}>
          <RadioField
            name="bolsaFamilia"
            label="Bolsa Família"
            options={[
              {label: 'Sim', value: 'true'},
              {label: 'Não', value: 'false'},
            ]}
          />
        </Box>

        <Box flex={3}>
          <RadioField
            name="usaTransportePublico"
            label="Usa Transporte Público"
            options={[
              {label: 'Sim', value: 'true'},
              {label: 'Não', value: 'false'},
            ]}
          />
        </Box>
      </FormRow>

      <FormRow>
        <Box>
          <RadioField
            name="necessidadesEducacionaisEspeciais"
            label="Necessidades Educacionais Especiais"
            options={[
              {label: 'Sim', value: 'true'},
              {label: 'Não', value: 'false'},
            ]}
            isRequired
          />
        </Box>
      </FormRow>

      <Box mt="50px"></Box>

      <EnderecoForm parentField="endereco" isRequired />
    </Container>
  )
}
