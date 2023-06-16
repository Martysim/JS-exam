

const arrOfNums = [2, 3, 5, 2];

function calculateAvg(arr) {
    let sum = 0;
    for (num of arr) {
        sum += num;
    };
    return sum / arr.length;
};

console.log(calculateAvg(arrOfNums));

// .reduce ()
// .foreach() 
// pull request and send Brani i Lili

console.log(".reduce()");

function calculateAvg2(arr) {
    let sum = 0;
    let result = 0;
    result = arr.reduce((sum, num) => {
        sum += num;
        return sum;
    });
    return result / arr.length;
};

console.log(calculateAvg2(arrOfNums));



console.log(".foreach()");

function calculateAvg3(arr) {

    let result = 0;
    arr.forEach(function (num) {
        result += num;
    });
    return result / arr.length;
};

console.log(calculateAvg3(arrOfNums));


