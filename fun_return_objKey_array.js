// Write a function that takes in an object and returns an array of all the keys in the object.

const obj = {
    one: 1,
    two: 2,
    three: 3
  };

function objInArr (obj) {
    return Object.getOwnPropertyNames(obj);
}

console.log(objInArr(obj));