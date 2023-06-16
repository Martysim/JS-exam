// Write a function that takes an object and returns true if all of its properties have values.

console.log("------------------------------------------------------");

const objValueT = {
    prop1: 1,
    prop2: 2,
    prop3: 3
};
const objValueF = {
    prop1: 1,
    prop2: 2,
    prop3: undefined
};

function checkPropValue(obj) {
    for (let value in obj) {
        if (obj.hasOwnProperty(value) && obj[value] === undefined) {
            return false;
        };
    };
    return true;
};

console.log(checkPropValue(objValueT));
console.log(checkPropValue(objValueF));
