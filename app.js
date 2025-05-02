const path = require('path');     // ourlocal build in module
const colors = require('colors');  // third party module
const calculator = require('./my_modules/calculator');   // Our custom calculator module

const currentFile = path.basename(__filename);  // using the path module to get the basename of the current file
console.log(colors.rainbow(`Current file: ${currentFile}`));

const num1 = 20;
const num2 = 5;

console.log('\nCalculator Operations:'.underline);

// addition
const sum = calculator.add(num1, num2)
console.log(colors.red(`\n${num1} + ${num2} = ${sum}`))

// subtraction
const difference = calculator.subtract(num1, num2);
console.log(colors.blue(`${num1} - ${num2} = ${difference}`));

// multiplication
const product = calculator.multiply(num1, num2);
console.log(colors.green(`${num1} x ${num2} = ${product}`));

// divition
try{
    const divition = calculator.divide(num1, num2);
    console.log(colors.yellow(`${num1} \u00F7 ${num2} = ${divition}`));
} catch(error){
    console.log(colors.bgRed(error.message));
}

console.log(colors.bgGreen.black.bold('\nAll operations completed successfully! '));


