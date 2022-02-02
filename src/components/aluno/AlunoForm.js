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
import {useField, Formik, FieldArray} from 'formik'
import {AddIcon, DeleteIcon} from '@chakra-ui/icons'
import {map} from 'lodash'
import {useState} from 'react'

import {maskDateString} from '../../shared/utils/dates'
import {maskCpf} from '../../shared/utils/strings'
import {withFirstItem} from '../../shared/utils/array'
import schemaResponsavel, {
  defaultValues,
} from '../../shared/schemas/responsavel'
import estados from '../../shared/data/estados'
import niveisEscolaridade from '../../shared/data/niveisEscolaridade'
import InputField from '../../shared/components/InputField'
import CheckboxField from '../../shared/components/CheckboxField'
import SelectField from '../../shared/components/SelectField'

const FormRow = ({children, ...rest}) => {
  return (
    <HStack spacing={3} mb="5" alignItems="flex-start" {...rest}>
      {children}
    </HStack>
  )
}

const PaisResponsaveisTable = ({
  onRemove = () => null,
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
        <Th>Remover</Th>
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
              icon={<DeleteIcon />}
              onClick={() => onRemove(index)}
            />
          </Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
)

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

export default function AlunoForm({handleChange}) {
  const [isModalPaisResponsaveisOpen, setIsModalPaisResponsaveisOpen] =
    useState(false)
  const [paiResponsavelSelecionado, setPaiResponsavelSelecionado] = useState(0)
  const [responsaveisField] = useField({
    name: 'responsaveis',
  })
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
            maxLength={100}
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="endereco.cidade"
            label="Cidade:"
            onChange={handleChange}
            maxLength={100}
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

      {/* row 7 */}
      <FormRow mt="30px">
        <Text fontWeight="semibold">Pais e Responsáveis</Text>
      </FormRow>

      {/* row 8 */}
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

      {/* row 10 */}
      <FieldArray
        name="responsaveis"
        render={(arrayHelpers) => (
          <>
            {/* row 9 */}
            <PaisResponsaveisTable
              items={responsaveisField.value}
              onRemove={(indexToRemove) => {
                arrayHelpers.remove(indexToRemove)
              }}
              emptyTextMessage="Nenhum pai ou responsável foi informado"
            />
            <ModalPaiResponsavel
              isOpen={isModalPaisResponsaveisOpen}
              currentIndex={paiResponsavelSelecionado}
              onAdd={(responsavel) => {
                arrayHelpers.push(responsavel)
                setIsModalPaisResponsaveisOpen(false)
              }}
              onClose={() => setIsModalPaisResponsaveisOpen(false)}
            />
          </>
        )}
      />
    </Container>
  )
}
