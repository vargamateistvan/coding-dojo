const StringCalculator = require('./index');

const stringCalculator = new StringCalculator();

describe('test sum function', () => {
    it('result should be number', ()=>{
        const result = stringCalculator.add('')

        expect(typeof result === 'number' || result instanceof Number).toBe(true);
    });

    it('should return 1', () => {
        expect(stringCalculator.add('1\n0')).toBe(1);
    });

    it('should return 0', ()=>{
        expect(stringCalculator.add('')).toBe(0)
    })

    it('should return number sum', ()=>{
        expect(stringCalculator.add('1\n1')).toBe(2);
    })

    it('should handle special characters', ()=>{
        expect(stringCalculator.add('%\n%')).toBe(NaN)
    })

    it('should handle unknown amount of number', ()=>{
        expect(stringCalculator.add('1\n1\n1')).toBe(3);
    })
});