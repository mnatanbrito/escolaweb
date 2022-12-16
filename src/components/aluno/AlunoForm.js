import {
  Box,
  Container,
  Text,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import {useField, Formik, FieldArray, useFormikContext} from 'formik'
import {AddIcon} from '@chakra-ui/icons'
import {map} from 'lodash'
import {useState} from 'react'

import {maskDateString} from '../../shared/utils/dates'
import {maskCpf} from '../../shared/utils/strings'
import {withFirstItem} from '../../shared/utils/array'
import schemaResponsavel, {
  defaultValues,
} from '../../shared/schemas/responsavel'
import {corPeleOptions} from '../../shared/data/corPele'
// import {PaisResponsaveisTable} from './paisResponsaveis'
import estados from '../../shared/data/estados'
import niveisEscolaridade from '../../shared/data/niveisEscolaridade'
import InputField from '../../shared/components/InputField'
import CheckboxField from '../../shared/components/CheckboxField'
import SelectField from '../../shared/components/SelectField'
import RadioField from '../../shared/components/RadioField'
import FormRow from '../../shared/components/FormRow'
import EnderecoForm from '../../shared/components/EnderecoForm'

const ModalPaiResponsavel = ({
  onAdd = () => null,
  onClose = () => null,
  isOpen = false,
}) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <Formik
          validationSchema={schemaResponsavel}
          initialValues={defaultValues}
          onSubmit={(values) => {
            onAdd(values)
          }}
        >
          {({
            touched,
            setFieldValue,
            handleChange,
            errors,
            isValid,
            handleSubmit,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <ModalHeader>Dados do responsável</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
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
                </FormRow>

                <FormRow>
                  <CheckboxField isRequired name="falecido" text="Falecido:" />
                </FormRow>

                <FormRow>
                  <Box flex={6}>
                    <InputField
                      name="nacionalidade"
                      label="Nacionalidade:"
                      onChange={handleChange}
                      maxLength={100}
                      isRequired
                    />
                  </Box>

                  <Box flex={6}>
                    <InputField
                      name="naturalidade"
                      label="Naturalidade:"
                      onChange={handleChange}
                      maxLength={100}
                      isRequired
                    />
                  </Box>
                </FormRow>

                <FormRow>
                  <InputField
                    name="profissao"
                    label="Profissão:"
                    onChange={handleChange}
                    maxLength={100}
                  />
                </FormRow>

                <FormRow>
                  <Box flex={3}>
                    <InputField
                      name="enderecoTrabalho.rua"
                      label="Rua:"
                      onChange={handleChange}
                      maxLength={100}
                    />
                  </Box>

                  <Box flex={3}>
                    <InputField
                      name="enderecoTrabalho.bairro"
                      label="Bairro:"
                      onChange={handleChange}
                      maxLength={100}
                    />
                  </Box>
                </FormRow>

                <FormRow>
                  <Box flex={3}>
                    <InputField
                      name="enderecoTrabalho.numero"
                      label="Número:"
                      onChange={handleChange}
                      maxLength={6}
                    />
                  </Box>

                  <Box flex={9}>
                    <InputField
                      name="enderecoTrabalho.complemento"
                      label="Complemento:"
                      onChange={handleChange}
                      maxLength={100}
                    />
                  </Box>
                </FormRow>

                {/* row 6 */}
                <FormRow>
                  <Box>
                    <InputField
                      name="enderecoTrabalho.cidade"
                      label="Cidade:"
                      onChange={handleChange}
                      maxLength={100}
                    />
                  </Box>

                  <Box>
                    <SelectField
                      name="enderecoTrabalho.estado"
                      label="Estado:"
                      items={withFirstItem(
                        map(estados, (estado) => ({
                          label: estado.nome,
                          value: estado.sigla,
                        }))
                      )}
                      isRequired
                    />
                  </Box>
                </FormRow>

                <FormRow>
                  <SelectField
                    name="nivelEscolaridade"
                    items={withFirstItem(niveisEscolaridade)}
                    label="Escolaridade:"
                  />
                </FormRow>
              </ModalBody>
              <ModalFooter>
                <FormRow justifyContent="flex-end" spacing="5px">
                  <Button variant="ghost" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={!isValid || !touched}>
                    Adicionar
                  </Button>
                </FormRow>
              </ModalFooter>
            </form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  )
}

export default function AlunoForm({handleChange, handleBlur}) {
  const {errors} = useFormikContext()
  const [isModalPaisResponsaveisOpen, setIsModalPaisResponsaveisOpen] =
    useState(false)
  const [paiResponsavelSelecionado, setPaiResponsavelSelecionado] = useState(0)

  return (
    <Container maxW="full">
      {/* row 1 */}
      <FormRow>
        <Box flex={8}>
          <InputField
            name="nome"
            label="Nome:"
            maxLength={100}
            isRequired
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
        <Box flex={4}>
          <InputField
            name="dataNascimento"
            label="Data de Nascimento:"
            maxLength={10}
            mask={maskDateString}
            isRequired
            onChange={handleChange}
            onBlur={handleBlur}
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

      <FormRow>
        <Box flex={3}>
          <InputField
            name="email"
            label="Email:"
            onChange={handleChange}
            maxLength={100}
          />
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
          />
        </Box>
      </FormRow>

      <FormRow>
        <Box flex={1}>
          <Text>{JSON.stringify(errors)}</Text>
        </Box>
      </FormRow>

      <Box mt="50px"></Box>

      {/* <EnderecoForm parentField="endereco" isRequired /> */}

      <Box mt="50px"></Box>

      {/* row 7
      <FormRow mt="30px">
        <Text fontWeight="semibold">Pais e Responsáveis</Text>
      </FormRow>
      {responsaveisField.value.length < 3 && (
        <FormRow justifyContent="flex-end">
          <IconButton
            aria-label="Cadastrar pai ou responsável"
            colorScheme="blue"
            icon={<AddIcon />}
            onClick={() => {
              const paisResponsaveis = responsaveisField.value || []
              setPaiResponsavelSelecionado(
                paisResponsaveis.length === 0
                  ? paisResponsaveis.length
                  : paisResponsaveis.length + 1
              )
              setIsModalPaisResponsaveisOpen(true)
            }}
          />
        </FormRow>
      )}

       */}
    </Container>
  )
}
