import {object} from 'yup'

import {nonRequiredString, requiredString} from './strings'
import estado from './estado'

export default object().shape({
  rua: requiredString,
  bairro: requiredString,
  numero: nonRequiredString,
  complemento: nonRequiredString,
  cidade: requiredString,
  estado: estado.required().nullable(true),
})
