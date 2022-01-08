import {object, string} from 'yup'

import dataPassada from './dataPassada'

export default object().shape({
  rg: string().nullable(false).required(),
  orgaoEmissor: string().nullable(false).required(),
  dataEmissao: dataPassada.nullable(false).required(),
})
