import dadosEleitor from './dadosEleitor'

describe('dadosEleitor', () => {
  test('Should return true when model is valid', async () => {
    const eleitor = {
      numero: '123',
      zona: '123',
      secao: '123',
    }

    expect(await dadosEleitor.isValid(eleitor)).toBe(true)
  })

  test('Should return true when non required fields are null', async () => {
    const eleitor = {
      numero: '123',
      zona: '123',
      secao: '123',
    }

    expect(
      await dadosEleitor.isValid({
        ...eleitor,
        numero: null,
      })
    ).toBe(false)
    expect(
      await dadosEleitor.isValid({
        ...eleitor,
        zona: null,
      })
    ).toBe(false)
    expect(
      await dadosEleitor.isValid({
        ...eleitor,
        secao: null,
      })
    ).toBe(false)
  })
})
