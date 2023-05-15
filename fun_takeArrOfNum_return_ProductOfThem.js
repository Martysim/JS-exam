// Write a function that takes in an array of numbers and returns the product of all the numbers in the array.

const arr = [3, 5, 2, 4];

// sus for in cikul
function productOfNumInArr (arr) {
    let product =1;
    for(let i in arr) {
        product *= arr[i];
    };
    
    return product;
};

console.log(productOfNumInArr(arr));

// arr.forEach

const arr2 = [2, 5, 3];

function productOfNumInArr2 (arr) {
    let sum = 1;
    arr.forEach( function(num) {
        sum *= num;
    });
    return sum;
};

console.log(productOfNumInArr2(arr2));


// for cikul

const arr3 = [3, 4, 5];
function productOfNumInArr3 (arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    return product;
  }
  
console.log(productOfNumInArr3(arr3));
