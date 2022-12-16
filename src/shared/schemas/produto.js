import {object} from 'yup'

import {requiredString, nonRequiredString} from './strings'
import dataPassada from './dataPassada'
import endereco from './endereco'

export default object().shape({
  id: nonRequiredString,
  title: requiredString,
  description: nonRequiredString,
  dateAdded: dataPassada.required().nullable(true),
  endereco: endereco.required().nullable(true),
})
