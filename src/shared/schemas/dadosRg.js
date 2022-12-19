import {object} from 'yup'

import {requiredString} from './strings'
import dataPassada from './dataPassada'

export default object().shape({
  rg: requiredString,
  orgaoEmissor: requiredString,
  dataEmissao: dataPassada.required().nullable(true),
})
