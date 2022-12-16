import React from 'react'
import {AddIcon} from '@chakra-ui/icons'
import {IconButton, Text} from '@chakra-ui/react'
import {useField, FieldArray} from 'formik'

import FormRow from '../../../shared/components/FormRow'
import PaisList from './PaisList'

const PaisTable = ({onClose}) => {
  const [paisField] = useField('pais')

  const shouldShowPlusIcon = (paisField.value || []).length < 2

  return (
    <>
      {shouldShowPlusIcon && (
        <FormRow justifyContent="flex-end">
          <IconButton
            aria-label="Cadastrar pai ou mãe"
            title="Cadastrar pai ou mãe"
            colorScheme="blue"
            icon={<AddIcon />}
            onClick={onClose}
          />
        </FormRow>
      )}

      <FieldArray
        name="pais"
        render={(arrayHelpers) => (
          <FormRow>
            <PaisList
              items={paisField.value}
              onRemove={(indexToRemove) => {
                arrayHelpers.remove(indexToRemove)
              }}
              emptyTextMessage="Pai e mãe não informados"
            />
            {/* <ModalPaiResponsavel
              isOpen={isModalPaisResponsaveisOpen}
              currentIndex={paiResponsavelSelecionado}
              onAdd={(responsavel) => {
                arrayHelpers.push(responsavel)
                setIsModalPaisResponsaveisOpen(false)
              }}
              onClose={() => setIsModalPaisResponsaveisOpen(false)}
            /> */}
          </FormRow>
        )}
      />
    </>
  )
}

export default PaisTable
