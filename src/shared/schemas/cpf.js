import * as yup from 'yup'

import {isValidCpf} from '../validations/brazil'

export default yup.string().test({
  name: 'cpfValido',
  test: (cpf) => {
    return cpf && cpf.length > 0 ? isValidCpf(cpf) : true
  },
})
