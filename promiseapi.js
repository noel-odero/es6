console.log('Promise APIs')

// promise.all()  - executes multiple promises in parallel and returns a new promise
// - waits for execution of all promises to complete, so execution depends on maximum amount of time taken
// - if any of the promises rejects, it rejects immediately
//  - used for example when downloading all image files anad want to upload when all is successfull


// promise.allSettled - takes input array of all promises and executes them, but rejects all incase any of the input promises rejects but unlike promise.all, it deosn't reject if any of the promises reject. It continues to execute all other promsies in the array then returns the result with all the error
// It shows the status of each promise so you are able to point out the one being rejected

// promise.any - takes a collectionn on input promises,  returns a promise when any of the inout promises is fulfilled.The first one to be fulfilled is returned so amount of time depends on the least amount of time taken. Ignores errors

// promise.race - creates a race among all promises and the fastest always win. Significant difference with any is that it will also rejects anything if one of the input promsies is rejected


// promise.resolve() - used to resolve a value. 
// promise.reject()

const red = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve("red")
    }, 1000)
    
})

const green = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        resolve(" green")
    }, 3000)
    
})

const blue = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        reject("blue")
    }, 5000)
    
})

// const allPromises = Promise.allSettled([red, green, blue])

// allPromises.then((value) => {
//     console.log(value)
// })

const testAll = async () => {
    const colors = await Promise.reject(blue);
    console.log(colors)
    // colors.forEach((color)=> {console.log(color)})
}

testAll()

