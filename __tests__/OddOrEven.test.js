const { safeImport, safeCall } = require('../__lib__/utils');

const { realNets } = safeImport('../OddOrEven');

describe(('Odd or even test'), () => {
    const arrayResult = [
        1,  2,      'Real', 4,      5,  'Real',
        7,  8,      'Real', 'Nets', 11, 'Real',
        13, 14,     'Real', 16,     17, 'Real',
        19, 'Nets', 'Real', 22,     23, 'Real',
        25, 26,     'Real', 28,     29, 'Realnets',
        31, 32,     'Real', 34,     35, 'Real',
        37, 38,     'Real', 'Nets', 41, 'Real',
        43, 44,     'Real', 46,     47, 'Real',
        49, 'Nets', 'Real', 52,     53, 'Real',
        55, 56,     'Real', 58,     59, 'Realnets',
        61, 62,     'Real', 64,     65, 'Real',
        67, 68,     'Real', 'Nets', 71, 'Real',
        73, 74,     'Real', 76,     77, 'Real',
        79, 'Nets', 'Real', 82,     83, 'Real',
        85, 86,     'Real', 88,     89, 'Realnets',
        91, 92,     'Real', 94,     95, 'Real',
        97, 98,     'Real', 'Nets'
      ];
    test('Calculates and returns the right array', () => {
        const result = safeCall(realNets);
        expect(result).toEqual(arrayResult);
    })
})