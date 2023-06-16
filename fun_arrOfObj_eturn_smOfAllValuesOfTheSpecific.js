// Write a function that takes in an array of objects and a property name, and returns the sum of all the values of the specified property in the objects.


const arrOfObj2 = [
  {
    name: "alex",
    prop: 2
  },
  {
    name: "ivan",
    prop: 4
  }
];

function sumOfValuesOfTheSpecific(arrObj, key) {
  let result = [];
  for (var i = 0; i < arrObj.length; i++) {
    result.push(arrObj[i][key]);
  };
  let sumOfNumber = result.reduce(function (sum, num) {
    return sum + num;
  }, 0);
  return sumOfNumber;
};
// num [prop]

console.log("Решение със .reduse()");
console.log(sumOfValuesOfTheSpecific(arrOfObj2, "prop"));


function sumOfValuesOfTheSpecific2(arrObj, key) {
  let result = [];
  let sum = 0;
  for (var i = 0; i < arrObj.length; i++) {
    result.push(arrObj[i][key]);
  };
  result.forEach(function (num) {
    sum += num;
  });
  return sum;
};

console.log("Решение със .forEach()");
console.log(sumOfValuesOfTheSpecific2(arrOfObj2, "prop"));


// ugrade exersice with .reduce()


function sumOfValuesOfTheSpecific3(arrObj, key) {

  return arrObj.reduce((sum, num) => {
    return sum + num[key];
  },
    0);

};

console.log("Подобрено решение със .reduce()");
console.log(sumOfValuesOfTheSpecific3(arrOfObj2, "prop"));





