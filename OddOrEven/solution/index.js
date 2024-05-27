// Make a function called "realNets" that will loop through the numbers 1 to 100 (inclusive).
// For every number that is divisible by 3, instead of the number, print the word "Real"
// For every number that is divisible by 10, print the word: "Nets"
// For every number that is BOTH divisible by 3 and 10, print the word : "Realnets".
// If the number is not divisble by neither 3 or 10, just push the number into the array.
// The function should return the resulting array of values
// The result should resemble something like this: [1, 2, 'Real', 4, 5, 'Real', 7, 8, 'Real', 'Nets', ...];

// Write your code here
function realNets() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 10 === 0) {
            arr.push('Realnets');
            continue;
        }
        if (i % 3 === 0) {
            arr.push('Real')
            continue;
        }
        if (i % 10 === 0) {
            arr.push('Nets')
            continue;
        }
        arr.push(i);
    }
    return arr;
}
// Write your code here

console.log(realNets());

// Make sure to export your code otherwise this will not work.
module.exports = {
    realNets,
};