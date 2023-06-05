// Write a function that takes two objects and returns a new object that combines the properties of both.
const objC1 = {
    a: 1,
    b: 2,
    c: 3
};
const objC2 = {
    d: 4,
    e: 5
};


function combineObj (obj1, obj2) {
    return newObj = { ...obj1, ...obj2 };
};


console.log(combineObj(objC1, objC2));
  