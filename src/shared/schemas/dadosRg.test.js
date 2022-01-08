import dadosRg from './dadosRg'

describe('dadosRg', () => {
  test('Should return true when model is valid', async () => {
    const validation = await dadosRg.isValid({
      rg: '1085117992',
      orgaoEmissor: 'SSP-MA',
      dataEmissao: '01/01/2009',
    })
    expect(validation).toBe(true)
  })

  test('Should return false when no rg is present', async () => {
    const dados = {
      rg: null,
      orgaoEmissor: 'SSP-MA',
      dataEmissao: '01/01/2009',
    }
    expect(await dadosRg.isValid(dados)).toBe(false)
    expect(
      await dadosRg.isValid({
        ...dados,
        rg: '',
      })
    ).toBe(false)
  })

  test('Should return false when no orgaoEmissor is present', async () => {
    const dados = {
      rg: '1085117992',
      orgaoEmissor: null,
      dataEmissao: '01/01/2009',
    }
    expect(await dadosRg.isValid(dados)).toBe(false)
    expect(
      await dadosRg.isValid({
        ...dados,
        orgaoEmissor: '',
      })
    ).toBe(false)
  })

  test.only('Should return false when no dataEmissao is present', async () => {
    const dados = {
      rg: '1085117992',
      orgaoEmissor: 'SSP-MA',
      dataEmissao: null,
    }
    expect(await dadosRg.isValid(dados)).toBe(false)
    expect(
      await dadosRg.isValid({
        ...dados,
        dataEmissao: '',
      })
    ).toBe(false)
  })
})
