// A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise may be in one of 3 states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: Meaning that the operation was completed successfully. 
// 3. Rejected: Meaning that the operation failed.
// A promise is settled if it is either fulfilled or rejected.
// A promise is unfulfilled if it is still pending.

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})

p.then((message) => {
    console.log("This is in the then" + message)
}).catch((message) => {
    console.log("This is in the catch" + message)
})