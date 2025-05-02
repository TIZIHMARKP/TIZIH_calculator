
// Method one
function add(a, b) {
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

module.exports ={
    add,
    subtract,
    multiply,
    divide
}

//  Method 2 
/* 
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (a === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

module.exports = calculator;

*/