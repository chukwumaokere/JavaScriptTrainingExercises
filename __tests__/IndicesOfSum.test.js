const { safeImport, safeCall } = require('../__lib__/utils');

const { IndicesOfSum } = safeImport('../IndicesOfSum');

describe('Passes Indices of Sum', () => {
    test('Returns an array of numbers that sum up to the target', () => {
        const arr = [3, 6, 10, 5];
        const target = 9;
        const expectedResult = [0, 1];
        const result = safeCall(IndicesOfSum, arr, target);
        expect(result).toEqual(expectedResult);
    })
    test('Returns an array of numbers that sum up to the target', () => {
        const arr = [1, 2, 4, 3];
        const target = 7;
        const expectedResult = [2, 3];
        const result = safeCall(IndicesOfSum, arr, target);
        expect(result).toEqual(expectedResult);
    })
    test('Returns an array of numbers that sum up to the target', () => {
        const arr = [1, 2, 4, 3, 3];
        const target = 6;
        const expectedResult = [1, 2];
        const result = safeCall(IndicesOfSum, arr, target);
        expect(result).toEqual(expectedResult);
    })
})