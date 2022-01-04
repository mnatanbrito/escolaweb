import * as yup from 'yup'
import {isFuture, isValid} from 'date-fns'

import {parseDate} from '../utils/dates'

export default yup
  .string()
  .test({
    name: 'dataInvalida',
    test: (dataNascimento) => {
      if (!dataNascimento) {
        return true
      }

      return isValid(parseDate(dataNascimento))
    },
  })
  .test({
    name: 'dataFuturo',
    test: (dataNascimento) => {
      if (!dataNascimento) {
        return true
      }

      const parsedDate = parseDate(dataNascimento)

      return !isFuture(parsedDate)
    },
  })
