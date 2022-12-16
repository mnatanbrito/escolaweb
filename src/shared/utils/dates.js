import {parse} from 'date-fns'
import {ptBR} from 'date-fns/locale'

const LONG_LOCALIZED_DATE = 'P'

const parseDate = (dateStr) => {
  return parse(dateStr, LONG_LOCALIZED_DATE, new Date(), {
    locale: ptBR,
  })
}

/**
 * Applies a brazilian date format mask to any string.
 * @param {String} str - String to apply the date format.
 * @returns Formatted string following the brazilian standard (dd/mm/yyyy).
 */
const maskDateString = (str = '') => {
  const unmaskedStr = (str || '').replace(/\D*/, '')

  return unmaskedStr.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')
}

export {parseDate, maskDateString}
