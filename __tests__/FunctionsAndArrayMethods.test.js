const { safeImport, safeCall } = require('../__lib__/utils');
const  { reverseArray, doubledArray, lessThan20 } = safeImport('../FunctionsAndArrayMethods');

describe('All Tests Should Pass', () => {

    test('reverseArray should reverse the array', () => {
        const arr_ = [10, 20, 30];
        expect(safeCall(reverseArray, arr_)).toEqual([30, 20, 10])
    });

    test('doubledArray should double the elements in the array', () => {
        const arr_ = [10, 20, 30];
        expect(safeCall(doubledArray, arr_)).toEqual([20, 40, 60])
    });

    test('lessThan20 should return all values less than 20', () => {
        const arr_ = [10, 20, 30];
        expect(safeCall(lessThan20, arr_)).toEqual([10])
    });

})