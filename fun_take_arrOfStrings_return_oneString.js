// Write a function that takes in an array of strings and a delimiter, and returns a string that concatenates all the strings in the array with the delimiter between them.

const strings = ["I", "have", "work", "tonight","!"];

const mergeString = "";

function mergeArrOfStringsInOneString(str, Mergestr) {
    
    for(let i of str){
        Mergestr += i + " ";
    };  
    return Mergestr;
};

console.log(mergeArrOfStringsInOneString(strings, mergeString));