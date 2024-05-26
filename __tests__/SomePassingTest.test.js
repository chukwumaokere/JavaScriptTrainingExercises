describe('Some fake passing test that shouldnt run unless specified', () => {
    it('should run if specified', () => { 
        const sum = (x, y) => {
            return x + y;
        };
        expect(sum(2, 2)).toEqual(4);
    })
})