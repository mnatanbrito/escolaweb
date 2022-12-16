import React from 'react'
import {Container, Box, Button} from '@chakra-ui/react'
import {map} from 'lodash'
import {useField} from 'formik'

import {withFirstItem} from '../../../shared/utils/array'
import FormRow from '../../../shared/components/FormRow'
import InputField from '../../../shared/components/InputField'
import CheckboxField from '../../../shared/components/CheckboxField'
import SelectField from '../../../shared/components/SelectField'
import estados from '../../../shared/data/estados'
import niveisEscolaridade from '../../../shared/data/niveisEscolaridade'

const PaisForm = ({onClose, index, handleChange}) => {
  // TODO: wrap in a new formik form just like the modal component did it
  return (
    <Container maxW="full">
      <FormRow>
        <Box flex={8}>
          <InputField
            name={`pais.${index}.nome`}
            label="Nome:"
            maxLength={100}
            isRequired
          />
        </Box>
      </FormRow>

      <FormRow>
        <CheckboxField
          isRequired
          name={`pais.${index}.falecido`}
          text="Falecido:"
        />
      </FormRow>

      {/* <FormRow>
        <Box flex={6}>
          <InputField
            name={`pais[${count}].nacionalidade`}
            label="Nacionalidade:"
            onChange={field.onChange}
            maxLength={100}
            isRequired
          />
        </Box>

        <Box flex={6}>
          <InputField
            name="naturalidade"
            label="Naturalidade:"
            onChange={field.onChange}
            maxLength={100}
            isRequired
          />
        </Box>
      </FormRow>

      <FormRow>
        <InputField
          name="profissao"
          label="Profissão:"
          onChange={field.onChange}
          maxLength={100}
        />
      </FormRow>

      <FormRow>
        <Box flex={3}>
          <InputField
            name="enderecoTrabalho.rua"
            label="Rua:"
            onChange={field.onChange}
            maxLength={100}
          />
        </Box>

        <Box flex={3}>
          <InputField
            name="enderecoTrabalho.bairro"
            label="Bairro:"
            onChange={field.onChange}
            maxLength={100}
          />
        </Box>
      </FormRow>

      <FormRow>
        <Box flex={3}>
          <InputField
            name="enderecoTrabalho.numero"
            label="Número:"
            onChange={field.onChange}
            maxLength={6}
          />
        </Box>

        <Box flex={9}>
          <InputField
            name="enderecoTrabalho.complemento"
            label="Complemento:"
            onChange={field.onChange}
            maxLength={100}
          />
        </Box>
      </FormRow>

      <FormRow>
        <Box>
          <InputField
            name="enderecoTrabalho.cidade"
            label="Cidade:"
            onChange={field.onChange}
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
      </FormRow> */}

      <FormRow justifyContent="flex-end" spacing="5px">
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
        {/* <Button
          type="submit"
          disabled={(meta.touched && meta.error) || !meta.touched}
        >
          Adicionar
        </Button> */}
      </FormRow>
    </Container>
  )
}

export default PaisForm
