console.log("Introduction to Promises!");

// A promise is a javascript object that allows us to do asynchronous calls
// It provides a value when async op completes successfully, or an error when it doesn't

// executor function is passed to the Promise constructor
let promise = new Promise((resolve, reject) => {
    // reject it after disaster happens
    setTimeout(()=>{
      // reject(new Error(`Jack fell down and ...`));
      resolve("water")
    }, 2000)

})

const grandParentsCooking = () => {
  promise
  .then((data) => console.log(`Cooking starts with ${data}`))
  
  .catch((err) => console.log(`OMG: ${err.message}`))
}

grandParentsCooking();



// Promise states(internal) Internal because they are in built
// - pending: when execution starts
// -fulfilled: when promise resolves successfully
// - rejected: When promise rejects

// fulfilled / rejected -> settled


// Result
// -undefined: Initial state when state is pending
// value - when promise resolves
// error - when promise rejects


// .then() - returns a promise or a sync value or an error
// .catch() - handles rejections from promises
// .finally()

