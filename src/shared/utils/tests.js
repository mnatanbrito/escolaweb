import React from 'react'

import {render} from '@testing-library/react'
import {Formik} from 'formik'

export const renderFormContext = (
  Component,
  validationSchema,
  initialValues
) => {
  return render(Component, {
    wrapper: ({children}) => (
      <Formik validationSchema={validationSchema} initialValues={initialValues}>
        {children}
      </Formik>
    ),
  })
}
