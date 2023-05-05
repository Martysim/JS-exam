// Write a function that takes in an array of strings and returns the number of strings that have a length greater than 5.

const arrStrgs = ["one", "dog", "text", "Wednesday", "unlock"];

function stringLenght (arr) {
    let result = 0;
    for (str of arr) {
        if (str.length > 5) {
            result ++;
        };
    };
    return result;
};

console.log(stringLenght(arrStrgs));
