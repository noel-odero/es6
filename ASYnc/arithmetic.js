// Implement a series of async functions that perform arithmetic operations: one function adds two numbers, another multiplies the result by 2, and a third subtracts 5. Chain these functions using await.


function add(a, b) {
    return a + b;
}
function multiplyByTwo(num) {
    return num * 2;
}

function subtractFive(num) {
    return num - 5;
}

async function performArithmeticOperations(a, b) {
    const sum = await add(a, b);
    const multiplied = await multiplyByTwo(sum);
    const result = await subtractFive(multiplied);
    return result;
}

// Call the function and log the result
performArithmeticOperations(3, 4)
    .then(result => console.log(result)) // Output: 9
    .catch(error => console.error(error));