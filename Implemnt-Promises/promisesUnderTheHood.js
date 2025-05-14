/**
 * MyPromise - A custom implementation of JavaScript Promises
 * 
 * This implementation follows the Promise/A+ specification to demonstrate
 * how JavaScript Promises work under the hood.
 */
class MyPromise {
    /**
     * The Promise constructor takes an executor function that receives two arguments:
     * resolve and reject. The executor is called immediately, allowing it to start
     * asynchronous work and then call resolve or reject when complete.
     * 
     * @param {Function} executor Function with signature (resolve, reject) => {}
     */
    constructor(executor) {
      // Every Promise starts in 'pending' state
      // In the native Promise, this state is managed internally and not exposed
      this.state = 'pending';
      
      // Value will store the resolved value when the Promise fulfills
      this.value = null;
      
      // Reason will store the error reason when the Promise rejects
      this.reason = null;
      
      // These arrays store callbacks to be executed when the Promise settles
      // In native Promises, these queues are managed internally by the JavaScript engine
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      /**
       * The resolve function that will be passed to the executor
       * When called, it transitions the Promise to the 'fulfilled' state
       * and triggers all the success callbacks
       * 
       * @param {any} value The value to fulfill the Promise with
       */
      const resolve = (value) => {
        // Only allow state change if still pending
        // Once a Promise is settled, its state and value cannot change
        if (this.state === 'pending') {
          // Change state to fulfilled
          this.state = 'fulfilled';
          
          // Store the fulfillment value
          this.value = value;
          
          // Execute all registered success callbacks with the value
          // In native Promises, these are queued in the microtask queue
          this.onFulfilledCallbacks.forEach(callback => callback(this.value));
        }
      };
  
      /**
       * The reject function that will be passed to the executor
       * When called, it transitions the Promise to the 'rejected' state
       * and triggers all the error callbacks
       * 
       * @param {any} reason The reason for the Promise rejection
       */
      const reject = (reason) => {
        // Only allow state change if still pending
        if (this.state === 'pending') {
          // Change state to rejected
          this.state = 'rejected';
          
          // Store the rejection reason
          this.reason = reason;
          
          // Execute all registered error callbacks with the reason
          this.onRejectedCallbacks.forEach(callback => callback(this.reason));
        }
      };
  
      /**
       * Execute the executor function immediately, providing it with the
       * resolve and reject functions
       * 
       * Any errors thrown during executor execution will automatically
       * reject the Promise - this is a key feature of native Promises
       */
      try {
        // This is called synchronously when the Promise is created
        executor(resolve, reject);
      } catch (error) {
        // If the executor throws an error, the Promise is rejected
        reject(error);
      }
    }
  
    /**
     * The then() method returns a new Promise that allows chaining of asynchronous operations
     * This is the cornerstone of Promise functionality
     * 
     * @param {Function} onFulfilled Function to be called if this Promise is fulfilled
     * @param {Function} onRejected Function to be called if this Promise is rejected
     * @return {MyPromise} A new Promise that will resolve with the return value of the callback
     */
    then(onFulfilled, onRejected) {
      // Create and return a new Promise, enabling chaining
      // This is why each .then() returns a new Promise in native JavaScript
      return new MyPromise((resolve, reject) => {
        /**
         * Function to handle the fulfillment case
         * It processes the onFulfilled callback and manages the next Promise in the chain
         * 
         * @param {any} value The value this Promise was fulfilled with
         */
        const fulfilledHandler = (value) => {
          // If no onFulfilled function provided, pass the value to the next promise
          // This allows for: promise.then().then(v => console.log(v))
          if (typeof onFulfilled !== 'function') {
            resolve(value);
            return;
          }
          
          try {
            // Execute the callback with the value
            const result = onFulfilled(value);
            
            // Handle if result is a Promise (for chaining)
            // This allows for: promise.then(() => new Promise(...))
            if (result instanceof MyPromise) {
              // If the callback returns a Promise, adopt its state
              result.then(resolve, reject);
            } else {
              // Otherwise, fulfill the new Promise with the returned value
              resolve(result);
            }
          } catch (error) {
            // If the callback throws, reject the new Promise
            // This allows for error propagation down the chain
            reject(error);
          }
        };
  
        /**
         * Function to handle the rejection case
         * It processes the onRejected callback and manages the next Promise in the chain
         * 
         * @param {any} reason The reason this Promise was rejected
         */
        const rejectedHandler = (reason) => {
          // If no onRejected function provided, pass the reason to the next promise
          // This is why errors propagate down the chain until caught
          if (typeof onRejected !== 'function') {
            reject(reason);
            return;
          }
          
          try {
            // Execute the callback with the reason
            const result = onRejected(reason);
            
            // Handle if result is a Promise
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              // Note that a successful catch handler resolves the next Promise
              // This allows for recovery from errors in the chain
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        // Now we need to determine what to do based on the Promise's current state
        if (this.state === 'fulfilled') {
          // If already fulfilled, execute handler asynchronously
          // We use setTimeout to simulate microtask behavior
          // In native Promises, this would use the microtask queue
          setTimeout(() => fulfilledHandler(this.value), 0);
        } else if (this.state === 'rejected') {
          // If already rejected, execute handler asynchronously
          setTimeout(() => rejectedHandler(this.reason), 0);
        } else {
          // If still pending, store handlers to be called later when Promise settles
          // This is crucial for asynchronous operations
          this.onFulfilledCallbacks.push(fulfilledHandler);
          this.onRejectedCallbacks.push(rejectedHandler);
        }
      });
    }
  
    /**
     * The catch() method is syntactic sugar for .then(null, onRejected)
     * It's used for handling errors in the Promise chain
     * 
     * @param {Function} onRejected Function to be called if this Promise is rejected
     * @return {MyPromise} A new Promise that will resolve with the return value of the callback
     */
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    /**
     * Creates a Promise that is already resolved with the given value
     * Useful for converting values into Promises
     * 
     * @param {any} value The value to resolve the Promise with
     * @return {MyPromise} A fulfilled Promise with the provided value
     */
    static resolve(value) {
      // Create a new promise that's already resolved
      return new MyPromise(resolve => resolve(value));
    }
  
    /**
     * Creates a Promise that is already rejected with the given reason
     * 
     * @param {any} reason The reason to reject the Promise with
     * @return {MyPromise} A rejected Promise with the provided reason
     */
    static reject(reason) {
      // Create a new promise that's already rejected
      return new MyPromise((_, reject) => reject(reason));
    }
  
    /**
     * Waits for all Promises in the array to resolve
     * Returns a new Promise that resolves with an array of all the results
     * or rejects with the reason of the first Promise that rejects
     * 
     * @param {Array} promises Array of Promises or values
     * @return {MyPromise} A Promise that resolves when all input Promises resolve
     */
    static all(promises) {
      return new MyPromise((resolve, reject) => {
        // Array to store results in the same order as input promises
        const results = [];
        let completed = 0;
        
        // Handle empty array case - resolves immediately
        if (promises.length === 0) {
          resolve(results);
          return;
        }
  
        // Process each promise
        promises.forEach((promise, index) => {
          // Handle non-promise values by wrapping them in a Promise
          MyPromise.resolve(promise)
            .then(value => {
              // Store the result at the same index to maintain order
              results[index] = value;
              completed++;
              
              // When all promises have been resolved, resolve the all() promise
              if (completed === promises.length) {
                resolve(results);
              }
            })
            .catch(reject); // If any promise rejects, reject the all() promise
        });
      });
    }
  
    /**
     * Returns a Promise that resolves or rejects as soon as one of the
     * promises in the array resolves or rejects
     * 
     * @param {Array} promises Array of Promises or values
     * @return {MyPromise} A Promise that resolves or rejects with the first settled Promise
     */
    static race(promises) {
      return new MyPromise((resolve, reject) => {
        // Attach handlers to each promise
        promises.forEach(promise => {
          // Convert non-Promise values to Promises
          MyPromise.resolve(promise).then(resolve, reject);
          // The first promise to settle will trigger either resolve or reject
          // Later settlements are ignored since a Promise can only settle once
        });
      });
    }
  
    /**
     * Creates a Promise that resolves after all promises are settled (either resolved or rejected)
     * Unlike Promise.all, it doesn't reject if some promises fail
     * 
     * @param {Array} promises Array of Promises or values
     * @return {MyPromise} A Promise that resolves with results of all input promises
     */
    static allSettled(promises) {
      return new MyPromise(resolve => {
        const results = [];
        let completed = 0;
        
        // Handle empty array case
        if (promises.length === 0) {
          resolve(results);
          return;
        }
  
        // Process each promise
        promises.forEach((promise, index) => {
          MyPromise.resolve(promise)
            .then(value => {
              // Store successful results
              results[index] = { status: 'fulfilled', value };
              checkCompletion();
            })
            .catch(reason => {
              // Store rejected results
              results[index] = { status: 'rejected', reason };
              checkCompletion();
            });
        });
  
        // Helper to check if all promises have settled
        function checkCompletion() {
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        }
      });
    }
  }
  
  // Examples to demonstrate how our custom Promise works
  
  // Example 1: Basic Promise usage
  console.log("EXAMPLE 1: Basic Promise Usage");
  const basicPromise = new MyPromise((resolve, reject) => {
    console.log("Executor function runs immediately");
    // Simulate an async operation
    setTimeout(() => {
      resolve("Operation completed successfully");
      // reject("Operation failed"); // Uncomment to see rejection handling
    }, 1000);
  });
  
  basicPromise
    .then(result => {
      console.log("Success:", result);
      return "Value from first then";
    })
    .then(result => {
      console.log("Chained then:", result);
      throw new Error("Simulated error");
    })
    .catch(error => {
      console.log("Caught error:", error.message);
      return "Recovered from error";
    })
    .then(result => {
      console.log("After catch:", result);
    });
  
  // Example 2: Using static methods
  console.log("\nEXAMPLE 2: Static Methods");
  const promise1 = MyPromise.resolve(100);
  const promise2 = new MyPromise(resolve => setTimeout(() => resolve(200), 300));
  const promise3 = "Not a promise, just a value";
  const promise4 = new MyPromise((_, reject) => setTimeout(() => reject("Failed"), 200));
  
  MyPromise.all([promise1, promise2, promise3])
    .then(results => {
      console.log("All resolved:", results);
    });
  
  MyPromise.race([promise2, promise4])
    .then(winner => {
      console.log("Race winner:", winner);
    })
    .catch(error => {
      console.log("Race failed:", error);
    });
  
  MyPromise.allSettled([promise1, promise2, promise3, promise4])
    .then(results => {
      console.log("All settled:", results);
    });
  
  // Example 3: Using the Promise to handle asynchronous file reading (simulated)
  console.log("\nEXAMPLE 3: Practical Promise Usage (Simulated)");
  
  // Simulate readFile function that returns a Promise
  function readFile(filename) {
    return new MyPromise((resolve, reject) => {
      console.log(`Reading file: ${filename}...`);
      
      // Simulate different behaviors based on filename
      if (filename === "missing.txt") {
        setTimeout(() => reject(new Error("File not found")), 500);
      } else {
        setTimeout(() => {
          resolve(`Content of ${filename}: Lorem ipsum dolor sit amet`);
        }, 800);
      }
    });
  }
  
  // Read multiple files in sequence
  readFile("config.txt")
    .then(content => {
      console.log(content);
      return readFile("data.txt");
    })
    .then(content => {
      console.log(content);
      return readFile("missing.txt");
    })
    .then(content => {
      console.log(content); // This won't execute because the previous Promise rejects
    })
    .catch(error => {
      console.log("Error:", error.message);
      return "Using fallback data";
    })
    .then(result => {
      console.log("Continuing with:", result);
    });