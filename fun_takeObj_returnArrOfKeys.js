// Write a function that takes an object and returns an array of its keys.

const objK = {
    name: "Martin",
    age: 19,
    university: "Uibit",
    car: "Honda"

};


function objKeys (obj) {

    return Object.keys(obj);
};

console.log(objKeys(objK));

