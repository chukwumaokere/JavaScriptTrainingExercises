// Write a function named "IndicesOfSum". Export the function when you're done.
// This function should accept 2 arguments.
// 1st Arg will be an array of numbers.
// 2nd Argument will be a target number. 
// Example 1: Array: [3, 6, 10, 5], Target Number: 9, Result: [0, 1]
// Example 2: Array: [1, 2, 4, 3], Target Number: 7, Result: [2, 3]
// Example 3: Array: [1, 2, 4, 3, 3], Target Number: 6, Result: [1, 2]
// Conditions: Each number will only be used once, the first 2 numbers that result in the target number will be in the result set, not the last 2

// Write your code here
function IndicesOfSum(arr, target) {
    const indicesMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (indicesMap.has(complement)) {
            return [indicesMap.get(complement), i];
        }
        indicesMap.set(arr[i], i);
    }
    return [];
}

module.exports = {
    IndicesOfSum,
};
// Write your code here