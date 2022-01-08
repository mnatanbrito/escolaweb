import data from './data'

describe('data', () => {
  test('Should return true for undefined values', async () => {
    const validation = await data.isValid(undefined)
    expect(validation).toBe(true)
  })

  test('Should return false for null values', async () => {
    const validation = await data.isValid(null)
    expect(validation).toBe(false)
  })

  test('Should return true for empty values', async () => {
    const validation = await data.isValid('')
    expect(validation).toBe(true)
  })

  test('Should return false for invalid dates', async () => {
    const validation = await data.isValid('22/22/2222')
    expect(validation).toBe(false)
  })
})
