import dataNascimentoSchema from './dataNascimento'

describe('dataNascimento', () => {
  test('Should return true to valid masked date', async () => {
    const validacao = await dataNascimentoSchema.isValid('22/12/1990')

    expect(validacao).toBe(true)
  })

  test('Should return false to valid unmasked date', async () => {
    const validacao = await dataNascimentoSchema.isValid('22121990')

    expect(validacao).toBe(false)
  })
})
