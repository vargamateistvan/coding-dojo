# The Task

Write a program that generates all two-word anagrams of the string “documenting”. Here’s a word list you might want to use:

[https://gist.githubusercontent.com/calvinmetcalf/084ab003b295ee70c8fc/raw/314abfdc74b50f45f3dbbfa169892eff08f940f2/wordlist.txt](https://gist.githubusercontent.com/calvinmetcalf/084ab003b295ee70c8fc/raw/314abfdc74b50f45f3dbbfa169892eff08f940f2/wordlist.txt)

# Example
```
function anagramsOfWord(word) {
    const pairs = [];
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isAnagramOf(word, [words[i], words[j]]) === true) {
                pairs.push([words[i], words[j]]);
            }
        }
    }
    return pairs;
}

function isAnagramOf(word, candidates) {
    const wordOrdered = word.split('').sort().join('');
    const candidatesOrdered = candidates.join('').split('').sort().join('');
    return wordOrdered === candidatesOrdered;
}
```

# Test
```
describe('test isAnagramOf function should return', () => {
    test('(["a", "b"] is anagram of "nope")', () => {
        expect(isAnagramOf("nope", ["a", "b"])).toEqual(false);
    });
    test('(["a", "b"] is anagram of "ab")', () => {
        expect(isAnagramOf("ab", ["a", "b"])).toEqual(true);
    });
    test('(["b", "a"] is anagram of "ab")', () => {
        expect(isAnagramOf("ab", ["a", "b"])).toEqual(true);
    });
    test('(["ba", "a"] is anagram of "bab")', () => {
        expect(isAnagramOf("bab", ["ba", "b"])).toEqual(true);
    });
});


describe('test anagramsOfWord function', () => {
    test.each(expectations)('anagramsOfWord(%s) should return pairs', (word, expectedWords) => {
        expect(anagramsOfWord(word)).toEqual(expectedWords);
    });
});
```
