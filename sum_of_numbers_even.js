// Write a function that takes in an array of numbers and returns the sum of all the even numbers in the array.

let array = [1,2,3,4,5,6,7,8,9];
let array2 = [4,5,6,7]

function arrSumEven (arr)
{
    let sum = 0;
    for(let num of arr) {
        if(num%2 !== 1) {
        sum = sum + num;
        }
    }
    return sum;   
}

console.log(arrSumEven(array));
console.log(arrSumEven(array2));
