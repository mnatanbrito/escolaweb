import {string} from 'yup'
import {isValid} from 'date-fns'

import {parseDate} from '../utils/dates'

export default string().test({
  name: 'dataInvalida',
  test: (dataNascimento) => {
    const coercedValue = !!dataNascimento
    if (!coercedValue) {
      return true
    }

    return isValid(parseDate(dataNascimento))
  },
})
