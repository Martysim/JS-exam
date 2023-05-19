// Write a function that takes in an array of numbers and returns a new array with all the numbers sorted in descending order


const numbers = [ 4, 5, 3, 7, 8, 1, 2 ];

function arraySort (arr) {
    const copyArray = [...arr];
    return copyArray.sort().reverse();
};

console.log(arraySort(numbers));
console.log(numbers);
