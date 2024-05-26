const arr_ = [10, 20, 30];

function reverseArray(arr) { 
    return arr.reverse();
}

const doubledArray = (arr) => {
    return arr.map((item) => item * 2);
}

const lessThan20 = (arr) => {
    return arr.filter((item) => item < 20)
}

reverseArray(arr_);
doubledArray(arr_);
lessThan20(arr_);

module.exports = {
    reverseArray,
    doubledArray,
    lessThan20
}