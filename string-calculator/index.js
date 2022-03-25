class StringCalculator {
    constructor() {}

    add(numbers) {
        if (numbers.includes(',')) return 'INVALID input'
        if (numbers === '') {
            return 0;
        }
        const numbersArray = numbers
            .split('\n')
            .map(number => parseInt(number, 10));
            
        if (numbersArray.some(number => number === NaN)) {
            return NaN;
        }
        return numbersArray.reduce((acc, curr) => acc + curr, 0);
    }

    sum(a, b) {
        return a + b;
    }
}

module.exports = StringCalculator;