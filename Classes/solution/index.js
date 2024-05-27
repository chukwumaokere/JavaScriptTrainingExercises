// Create a Maths class that has 4 methods for (sum, divide, multiply and subtract that does the operation "x (operation) y".
// i.e., sum should be something like x + y

class Maths {
    sum(x, y) {
        return x + y;
    }
    divide(x, y) {
        return x / y;
    }
    multiply(x, y) {
        return x * y;
    }
    subtract(x, y) {
        return x - y;
    }
}

// DO NOT TOUCH THIS
const math = new Maths();
console.log(math.sum(3, 5)); // Should log 8
console.log(math.divide(6, 3)); // Should log 2
console.log(math.subtract(8, 2)); // Should log 6
console.log(math.multiply(3, 10)); // Should log 30
module.exports = {
    Maths,
}
// DO NOT TOUCH THESE