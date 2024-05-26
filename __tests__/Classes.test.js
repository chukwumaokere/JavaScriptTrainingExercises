const { Maths } = require('../Classes');

describe('class is set up correctly', () =>{
    let math;
    beforeEach(() => {
        math = new Maths();
    })
    test('sum adds the 2 numbers', () => {
        const result = math.sum(3, 5);
        expect(result).toEqual(8)
    });
    test('subtract subtracts the 2 numbers', () => {
        const result = math.subtract(8, 2);
        expect(result).toEqual(6)
    });
    test('multply multiplies 2 numbers', () => {
        const result = math.multiply(3, 10);
        expect(result).toEqual(30)
    });
    test('divide divides the 2 numbers', () => {
        const result = math.divide(6, 3);
        expect(result).toEqual(2)
    });
})