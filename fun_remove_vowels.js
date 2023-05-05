// Write a function that takes in a string and returns the string with all the vowels removed.


const str = "a b c d f h p l u i o " ;

function disemvowel(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== "a" &&
            string[i] !== "e" &&
            string[i] !== "i" &&
            string[i] !== "o" &&
            string[i] !== "u") {
            newString += string[i];
        };
    };
    return newString;
};

  console.log(str);
  console.log(disemvowel(str));
