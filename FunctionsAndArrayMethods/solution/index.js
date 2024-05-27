// Fix this file so that the 3 functions work and the tests pass
// Hint: Run `npm run test:watch FunctionsAndArrayMethods`

// DO NOT TOUCH THIS
const arr_ = [10, 20, 30];
// DO NOT TOUCH THIS

// KEEP THIS AS A REGULAR FUNCTION, JUST MAKE IT WORK
function reverseArray(arr) { 
    return arr.reverse();
}

// KEEP THIS AS AN ARROW FUNCTION, JUST MAKE IT WORK
const doubledArray = (arr) => {
    return arr.map((item) => item * 2);
}

// KEEP THIS AS AN ARROW FUNCTION, JUST MAKE IT WORK
const lessThan20 = (arr) => {
    return arr.filter((item) => item < 20)
}


module.exports = {
    reverseArray,
    doubledArray,
    lessThan20
}

// THESE ARE FOR YOUR CONVENIENCE TO SEE THE EXECUTION OF YOUR CODE - FEEL FREE TO MODIFY THEM
console.log(reverseArray(arr_));
console.log(doubledArray(arr_));
console.log(lessThan20(arr_));
// THESE ARE FOR YOUR CONVENIENCE TO SEE THE EXECUTION OF YOUR CODE - FEEL FREE TO MODIFY THEM