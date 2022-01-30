import {
  HStack,
  Box,
  Container,
  Text,
  IconButton,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react'
import {useField, Formik} from 'formik'
import {AddIcon, EditIcon} from '@chakra-ui/icons'
import {map} from 'lodash'
import {useState} from 'react'

import {maskDateString} from '../../shared/utils/dates'
import {maskCpf} from '../../shared/utils/strings'
import schemaResponsavel, {
  defaultValues,
} from '../../shared/schemas/responsavel'
import estados from '../../shared/data/estados'
import InputField from '../../shared/components/InputField'
import CheckboxField from '../../shared/components/CheckboxField'
import DebugBox from '../../shared/components/DebugBox'
import SelectField from '../../shared/components/SelectField'

const FormRow = ({children, ...rest}) => {
  return (
    <HStack spacing={3} mb="5" alignItems="flex-start" {...rest}>
      {children}
    </HStack>
  )
}

const PaisResponsaveisTable = ({
  onEdit = () => null,
  items = [],
  emptyTextMessage = '',
}) => (
  <Table variant="simple">
    {items.length === 0 && <TableCaption>{emptyTextMessage}</TableCaption>}

    <Thead>
      <Tr>
        <Th>Nome</Th>
        <Th>Telefone contato</Th>
        <Th>Profissão</Th>
        <Th>Editar</Th>
      </Tr>
    </Thead>
    <Tbody>
      {map(items, (item, index) => (
        <Tr key={item.id}>
          <Td>{item.nome}</Td>
          <Td>{item.dadosContato && item.dadosContato.numero}</Td>
          <Td>{item.profissão}</Td>
          <Td>
            <IconButton
              aria-label="Editar pai ou responsável"
              icon={<EditIcon />}
              onClick={() => onEdit(index)}
            />
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

const ModalPaiResponsavel = ({
  onCreate = () => null,
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
        >
          {({touched, values, errors, isValid, handleSubmit, onChange}) => (
            <form noValidate onSubmit={handleSubmit}>
              <ModalHeader>Dados do responsável</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormRow>
                  <Box flex={8}>
                    <InputField
                      name="nome"
                      label="Nome:"
                      onChange={onChange}
                      maxLength={100}
                      isRequired
                    />
                  </Box>
                </FormRow>

                <FormRow>
                  <Box flex={8}>
                    <CheckboxField name="falecido" text="Falecido:" />
                  </Box>
                </FormRow>

                <FormRow>
                  <Box flex={6}>
                    <InputField
                      name="nacionalidade"
                      label="Nacionalidade:"
                      onChange={onChange}
                      maxLength={100}
                      isRequired
                    />
                  </Box>

                  <Box flex={6}>
                    <InputField
                      name="naturalidade"
                      label="Naturalidade:"
                      onChange={onChange}
                      maxLength={100}
                      isRequired
                    />
                  </Box>
                </FormRow>

                <FormRow>
                  <InputField
                    name="profissao"
                    label="Profissão"
                    text="Profissão:"
                    maxLength={100}
                    isRequired
                  />
                </FormRow>

                <FormRow>
                  <Box>
                    <DebugBox>{JSON.stringify(errors)}</DebugBox>
                  </Box>
                </FormRow>
              </ModalBody>
              <ModalFooter>
                <FormRow justifyContent="flex-end" spacing="5px">
                  <Button variant="ghost" onClick={onClose}>
                    Cancelar
                  </Button>
                  <Button
                    onClick={onCreate}
                    type="button"
                    disabled={!isValid || !touched}
                  >
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

export default function AlunoForm({handleChange}) {
  const [isModalPaisResponsaveisOpen, setIsModalPaisResponsaveisOpen] =
    useState(false)
  const [paiResponsavelSelecionado, setPaiResponsavelSelecionado] = useState(0)
  const [responsaveisField] = useField({
    name: 'responsaveis',
  })
  const adicionarPaiResponsavel = (dados) => {
    alert(JSON.stringify(dados))
  }
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

      <Box mt="50px"></Box>

      {/* row 4 */}
      <FormRow mt="30px">
        <Text fontWeight="semibold">Endereço</Text>
      </FormRow>

      {/* row 5 */}
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

      {/* row 6 */}
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

      <Box mt="50px"></Box>

      {/* row 4 */}
      <FormRow mt="30px">
        <Text fontWeight="semibold">Pais e Responsáveis</Text>
      </FormRow>

      {/* row 5 */}
      {responsaveisField.value.length === 0 && (
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

      {/* row 6 */}
      <PaisResponsaveisTable
        items={responsaveisField.value}
        emptyTextMessage="Nenhum pai ou responsável foi informado"
      />

      {/* row 7 */}
      <ModalPaiResponsavel
        isOpen={isModalPaisResponsaveisOpen}
        currentIndex={paiResponsavelSelecionado}
        onCreate={adicionarPaiResponsavel}
        onClose={() => setIsModalPaisResponsaveisOpen(false)}
      />
    </Container>
  )
}
