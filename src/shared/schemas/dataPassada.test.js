import {addDays, subDays, format} from 'date-fns'

import dataPassada from './dataPassada'

describe('dataPassada', () => {
  test('Should return true when valid date is provided', async () => {
    expect(
      await dataPassada.isValid(format(subDays(new Date(), 2), 'dd/MM/yyyy'))
    ).toBe(true)
  })

  test('Should return true when no value is provided', async () => {
    expect(await dataPassada.isValid(null)).toBe(false)
  })

  test('Should return true when empty is provided', async () => {
    expect(await dataPassada.isValid('')).toBe(true)
  })

  test('Should return false when future date is provided', async () => {
    expect(
      await dataPassada.isValid(format(addDays(new Date(), 2), 'dd/MM/yyyy'))
    ).toBe(false)
  })
})
