import {maskDateString} from './dates'

describe('dates', () => {
  describe('maskDateString', () => {
    test('Should apply mask currectly', () => {
      expect(maskDateString('2')).toBe('2')
      expect(maskDateString('22')).toBe('22/')
      expect(maskDateString('221')).toBe('22/1')
      expect(maskDateString('2212')).toBe('22/12')
      expect(maskDateString('22121')).toBe('22/12/1')
      expect(maskDateString('221219')).toBe('22/12/19')
      expect(maskDateString('2212199')).toBe('22/12/199')
      expect(maskDateString('22121990')).toBe('22/12/1990')
    })
  })
})
