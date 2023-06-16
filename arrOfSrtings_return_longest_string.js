// Create an array of strings and write a function that returns the longest string in the array.


const arrOfStrL = ["m", "ma", "mar", "marto", "Martin"];

function arrOfStrReturnLongStr(arrStr) {
    let longestStr = "";
    for (let str of arrStr) {
        if (str.length > longestStr.length) {
            longestStr = str;
        };
    };
    return longestStr;
};

console.log(arrOfStrReturnLongStr(arrOfStrL));

function arrOfStrReturnLongStr2(arrStr) {

    const reducer = (longestStr, currentStr) => {
        if (currentStr.length > longestStr.length) {
            longestStr = currentStr;
        };
        return longestStr;
    };
    return arrStr.reduce(reducer);

};

console.log(arrOfStrReturnLongStr2(arrOfStrL));




function arrOfStrReturnLongStr3(arrStr) {

    return arrStr.reduce((longestStr, currentStr) => {
        if (currentStr.length > longestStr.length) {
            longestStr = currentStr;
        };
        return longestStr;
    });

};

console.log(arrOfStrReturnLongStr3(arrOfStrL));
