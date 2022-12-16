import * as yup from 'yup'
import {isFuture, isValid} from 'date-fns'

import {parseDate} from '../utils/dates'

export default yup.string().test({
  name: 'dataNascimento',
  test: (dataNascimento) => {
    if (!dataNascimento) {
      return true
    }

    const parsedDate = parseDate(dataNascimento)
    const isValidDate = isValid(parsedDate)
    const isPastDate = !isFuture(parsedDate)

    return isValidDate && isPastDate
  },
})
