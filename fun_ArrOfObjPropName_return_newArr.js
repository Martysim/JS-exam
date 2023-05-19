// Write a function that takes in an array of objects and a property name, and returns a new array with the values of the specified property from each object.
// let arrObj = [
//     {
//       prop: 1,
//       prop2: 2
//     },
//     {
//       prop: 4,
//       prop3: 5
//     },
//     {
//       prop: 7,
//       prop5: 8 
//     }
//   ];
//   function idk (arrObj, propName) {
//   };
//   result = [1, 4, 7];

let arrOfObj = [
  {
    prop: 1,
    prop2: 4
  },
  {
    prop: 3,
    prop3: 5
  },
  {
    prop: 5,
    prop4: 7
  },
  {
    prop: 6,
    prop5: 8
  }

];

function arrOfObjInArrOfProp (arrObj, key) {
  let result = [];
  for (var i = 0; i < arrObj.length; i++) {
    result.push(arrObj[i][key]);
  };
  return result;
};

console.log(arrOfObjInArrOfProp(arrOfObj, "prop"));
