console.log("Promise chain");

// create a promise

const promise = new Promise((resolve, reject) => {
    reject(new Error("Rejecting a fake promise"));
})

// handling using then

promise.catch((error)=>{
    console.log(error)
})

// inside then method: 
// 1. You can return another promise
// 2. Return a syncronous value
// 3. Return/Throw an error


let getUser = new Promise((resolve, reject) => {
    const user = {
        name: "Noel",
        email: "noel@gmail.com",
        password: 'password',
        permission: ['db', 'hr', 'dev']
    }

    resolve(user)
})

getUser
.then((user)=>{
    console.log(`Got user ${user.name}`);

    if(user.permission.includes('hr')){
        throw new Error('You are not allowed!')
    }
})
.then((email) => console.log(`User address is ${email}`))
.catch((err) => console.log(err))