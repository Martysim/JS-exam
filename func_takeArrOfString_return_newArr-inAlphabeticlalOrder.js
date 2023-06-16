// Write a function that takes an array of strings and returns a new array with the strings in alphabetical order.


const arrOfStrings = ["Beta", "Alpha", "Gama", "Up", "Down"];
const arrOfStrings2 = ["g", "a", "b", "m", "l", "k", "j", "r", "t"];

function alphabeticalOrderArr(arr) {
    const arrCopy = [...arr];
    return arrCopy.sort();
};

console.log(arrOfStrings);
console.log(alphabeticalOrderArr(arrOfStrings));
console.log(arrOfStrings);
console.log(arrOfStrings2);
console.log(alphabeticalOrderArr(arrOfStrings2));

