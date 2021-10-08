let timeAsText = require('./index');
const expectations = [
    ['12:00', 'dél'],
    ['0:00', 'éjfél'],
    ['00:00', 'éjfél'],
    ['13:00', 'egy óra'],
    ['2:00', 'kettő óra'],
    ['02:00', 'kettő óra'],
    ['14:00', 'kettő óra'],
    ['12:30', 'fél egy'],
    ['11:01', 'egy perccel múlt tizenegy óra'],
    ['12:01', 'egy perccel múlt dél'],
    ['13:01', 'egy perccel múlt egy óra'],
    ['13:02', 'kettő perccel múlt egy óra'],
    ['13:03', 'három perccel múlt egy óra'],
    ['13:04', 'négy perccel múlt egy óra'],
    ['13:05', 'öt perccel múlt egy óra'],
    ['13:06', 'hat perccel múlt egy óra'],
    ['13:07', 'hét perccel múlt egy óra'],
    // ['13:08', 'hét perc múlva negyed egy'],
    ['13:15', 'negyed kettő'],
    ['13:30', 'fél kettő'],
    ['13:45', 'háromnegyed kettő'],
    // ['00:01', 'egy perccel múlt éjfél'],
];

describe('time in text', () => {
    test.each(expectations)('timeAsText("%s") should return "%s"', (time, result) => {
        expect(timeAsText(time)).toEqual(result);
    });
}); 