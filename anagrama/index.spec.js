const { checkIfAnagram, getAnagrams } = require('./index')

describe('Anagramma test', () => {
    it('checkIfAnagram should work', () => {
      expect(checkIfAnagram('moped', ['mop', 'de'])).toBe(true)
    })

    it('checkIfAnagram shouldnt work', () => {
      expect(checkIfAnagram('moped', ['mop', 'dedd'])).toBe(false)
    })

    it('getAnagrams', () => {
      expect(getAnagrams('documenting')).toEqual([['document', 'gin']])
    })

    it('getAnagrams has no result', () => {
        expect(getAnagrams('amazon')).toEqual([])
    })
})