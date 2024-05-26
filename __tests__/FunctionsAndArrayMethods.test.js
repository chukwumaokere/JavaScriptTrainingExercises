const  { reverseArray, doubledArray, lessThan20 } = require('../FunctionsAndArrayMethods');

describe('All Tests Pass', () => {

    test('reverseArray should reverse the array', () => {
        const arr_ = [10, 20, 30];
        expect(reverseArray(arr_)).toEqual([30, 20, 10])
    });

    test('doubledArray should double the elements in the array', () => {
        const arr_ = [10, 20, 30];
        expect(doubledArray(arr_)).toEqual([20, 40, 60])
    });

    test('lessThan20 should return all values less than 20', () => {
        const arr_ = [10, 20, 30];
        expect(lessThan20(arr_)).toEqual([10])
    });

})