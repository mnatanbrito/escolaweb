import * as yup from 'yup'
import {unmaskCpf} from '../utils/strings'

import {isValidCpf} from '../validations/brazil'

export default yup
  .string()
  .transform((value, originalValue) => {
    return !!value ? unmaskCpf(value) : value
  })
  .test({
    name: 'cpfValido',
    test: (cpf) => {
      return cpf && cpf.length > 0 ? isValidCpf(cpf) : true
    },
  })
