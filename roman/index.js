const romanNumbers = [
    { arabic: 40, roman: 'XL' },
    { arabic: 10, roman: 'X' },
    { arabic: 9, roman: 'IX' },
    { arabic: 5, roman: 'V' },
    { arabic: 4, roman: 'IV' },
    { arabic: 1, roman: 'I' },
];

const toRoman = value => {
    let results = '';
    for (let { arabic, roman } of romanNumbers) {
        while (value >= arabic) {
            results += roman;
            value -= arabic;
        }
    };
    return results;
}

module.exports = toRoman;