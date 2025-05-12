// Create a function that returns a Promise which rejects if given an invalid input (e.g., negative number). Use .catch() to handle the error when calling this function.

function validateInput(input) {
    return new Promise((resolve, reject) => {
        if (input < 0) {
            reject(new Error("Invalid input: negative number"));
        } else {
            resolve("Valid input");
        }
    });
}

validateInput(-5)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });