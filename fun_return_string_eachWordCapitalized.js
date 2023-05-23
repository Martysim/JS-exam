// Write a function that takes in a string and returns a new string with the first letter of each word capitalized.


const str5 = "I go home tonight";

function firstLetterOfEachWord (str){
    let arrStr = str.split(" ");
    let word ="";
    for (let i of arrStr) {
        word += i[0];
    };
    
    return word.toUpperCase();
};
console.log(firstLetterOfEachWord(str5));





// sus foreEach
//arrow fun

//git check out branch //main //git pull
//marge all branch in local comp
//za dm