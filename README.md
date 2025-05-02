# Node.js Calculator Application

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white);
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A demonstration project showcasting the use of different module types in Node.js:
- Local (built-in) modules
- Third-party modules
- Custom modules

## Features

- Performs basic arithmetic operations (addition, subtraction, multiplication, divition)
- Color-coded console output using the 'colors' module
- Demonstrates module imports and exports 
- Error handling for division by zero
- Uses Node.js path module for file operations

## File Structure
Calculator-app/

|-- my_modules/
  - calculator.js # Custom calculator
| 

|-- app.js # Main application file

|-- package.json # Project configuration

|-- README.md # This file

## Installation

1. Clone the repository:
    ``` bash
    git clone https://github.com/TIZIHMARKP/TIZIH-Calculator
    cd calculator-app

2. Install dependencies
   ``` bash
   npm install

## Usage

- Run the application:
    ``` bash
    node app.js

Expected output:
- Rainbow-colored current filename display
- Color-coded arithmetic operations:
   - Addition (red)
   - Subtraction (blue)
   - Multiplication (green)
   - Division (yellow)
   - Error messages (red background)

## Modules Used

1. Local Module
- path: Used to get the basename of the current file

2. Third-party Module
- colors: Used to add color to console outputs

3. Custom Module
- calculator: Contains arithmetic operations(add, subtract, multiply, divide)

## Screenshots

### Main Output
![Calculator Operation](./my_modules//images/main%20output.PNG)

### Error Handling
![Division Error](./my_modules/images/Error%20handling.PNG)


