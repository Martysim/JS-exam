// // Write a function that takes in an array of strings and a delimiter, and returns a string that concatenates all the strings in the array with the delimiter between them.

const strings = ["I", "have", "work", "tonight"];
    
// napravi si celiq for cikul

function mergeArrOfStringsInOneString(str, delimiter) {
    let mergeStr = "";
    for(let i = 0; i < str.length; i++) { 
        mergeStr += str[i];
        if(i <= str.length - 2) {
            mergeStr += delimiter;
        };
    };  
    return mergeStr;
};

console.log(mergeArrOfStringsInOneString(strings, "-"));



// napravi zadachata sus .join()

const strings2 = ["I", "have", "work", "tonight"];

function mergeArrOfStringsInOneString2(str2, delimiter2) {
    let mergeStr2 = [...str2].join(delimiter2);
    return mergeStr2;
};

console.log(mergeArrOfStringsInOneString2(strings2, "-"));
