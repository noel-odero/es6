// Create a calculator function that takes two numbers and a callback. The callback should perform the mathematical operation.

function calculate(num1, num2, callback){
    const result = callback(num1, num2)
    console.log(`The result is ${result}`)
}


function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

calculate(10, 5, add)
calculate(10, 5, subtract)  