import {slugify, maskCpf, unmaskCpf} from './strings'

describe('strings', () => {
  describe('maskCpf', () => {
    test('Should apply mask correctly to complete cpf', () => {
      expect(maskCpf('12345678912')).toBe('123.456.789-12')
    })

    test('Should not apply mask to incomplete cpf', () => {
      expect(maskCpf('123')).toBe('123')
      expect(maskCpf('123456')).toBe('123456')
      expect(maskCpf('123456789')).toBe('123456789')
      expect(maskCpf('1234567891')).toBe('1234567891')
    })
  })

  describe('unmaskCpf', () => {
    test('Should remove the mask correctly to complete cpf', () => {
      expect(unmaskCpf('123.456.789-12')).toBe('12345678912')
    })
  })

  describe('slugify', () => {
    test('Should return the correct slug for the strings', () => {
      expect(slugify('Escola de Teste 5555')).toBe('escola-de-teste-5555')
      expect(slugify('Colégio Sertão Maranhense')).toBe(
        'colegio-sertao-maranhense'
      )
    })
  })
})
