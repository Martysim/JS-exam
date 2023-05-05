// Write a function that takes in an array of strings and returns the number of strings that have a length greater than 5.

const arrStrgs = ["one", "dog", "text", "Wednesday", "unlock"];

function stringLenght (arr) {
    let greaterFive= "";
    let HowManyTimes = 0;
    for(str of arr){
        if (str.length > 5){
            greaterFive += str + " ";
            HowManyTimes ++
        }
    }
    return HowManyTimes;
}

console.log(stringLenght(arrStrgs));