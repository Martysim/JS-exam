// Write a function that takes an object and returns a string in the format "property: value".

console.log("----------------------------------------------------");

const objS = {
    property: "value",
    property2: "value2",
    property3: "value3",

};

function objInString (obj) {
    let result = "";
    for (let key in obj) {
        result += ` ${key}:${obj[key]}  `;
    };
    return result;
};

console.log(objInString(objS));




  
  