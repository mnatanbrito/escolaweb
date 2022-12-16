import React from 'react'

import usePaisForm from './usePaisForm'
import PaisForm from './PaisForm'
import PaisTable from './PaisTable'
import {FieldArray, useField} from 'formik'

const PaisFormSection = () => {
  const [field] = useField('pais')
  const {isTable, showTable, showForm} = usePaisForm()

  return (
    <FieldArray
      name="pais"
      render={(arrayHelpers) => (
        <>
          {isTable && <PaisTable onClose={showForm} />}
          {!isTable && (
            <PaisForm
              onClose={showTable}
              {...arrayHelpers}
              index={(field.value || []).length}
            />
          )}
        </>
      )}
    />
  )
}

export default PaisFormSection
