const words = require('./words')

const pairs = words.flatMap(
  (v, i) => words.slice(i + 1).map(w => [v, w])
);

const checkIfAnagram = (word, candidate) => {
  word = word.toLowerCase().split('').sort().join('').trim()
  candidate = candidate.join('').toLowerCase().split('').sort().join('')
  return word === candidate;
}

const getAnagrams = (word) => pairs.filter(pair => checkIfAnagram(word, pair))

module.exports = {
  checkIfAnagram,
  getAnagrams
}