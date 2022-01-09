import cpf from './cpf'

describe('cpf', () => {
  test('Should return true for valid CPF', async () => {
    expect(await cpf.isValid('210.167.720-25')).toBe(true)
    expect(await cpf.isValid('21016772025')).toBe(true)
  })

  test('Should return false for invalid CPF', async () => {
    expect(await cpf.isValid('210.167.720-26')).toBe(false)
    expect(await cpf.isValid('21016772026')).toBe(false)
  })
})
