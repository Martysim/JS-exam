// Create a function that takes an array of objects and returns an array of the values of a specified property.

console.log("------------------------------------");

const arrOfObj3 = [
    {
        age: 18,
        name: "martin"
    },
    {
        age: 19,
        name: "alex"
    }
];




function getPropertyValues(arr, property) {
    return arr.map(obj => obj[property]);
  
};
  
console.log(getPropertyValues(arrOfObj3, "age"));
console.log(getPropertyValues(arrOfObj3, "name"));


