class StringCalculator {
    constructor() {}

    static _sum(numbers) {
        return numbers.reduce((sum, number) => sum + number);
    }

    add(numbers) {
        let delimiters = /[\n,]/;
        if (numbers.startsWith('//')) {
            delimiters = numbers[2];
            numbers = numbers.substr(4);
        }
        const values = numbers.split(delimiters).map(Number);
        return StringCalculator._sum(values);
    }

}

module.exports = StringCalculator;