import {isFuture} from 'date-fns'

import {parseDate} from '../utils/dates'
import data from './data'

export default data.test({
  name: 'dataFuturo',
  test: (dataNascimento) => {
    const parsedDate = parseDate(dataNascimento)

    return !isFuture(parsedDate)
  },
})
