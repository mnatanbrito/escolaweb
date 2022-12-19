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

  test('Should cast the values correctly', () => {
    expect(cpf.cast('908.622.510-10')).toBe('90862251010')
    expect(cpf.cast('697.035.650-77')).toBe('69703565077')
    expect(cpf.cast('206.187.240-95')).toBe('20618724095')
  })
})
