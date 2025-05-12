//  Create a function that receives a string and returns a Promise. The promise should resolve with the uppercase version of the string but reject if the string is null or undefined.

function stringToUpperCase(str){
    return new Promise((resolve, reject) => {
        if(str === null || str === undefined){
            reject('String is null or undefined')
        } else {
            resolve(str.toUpperCase())
        }
    })
}


stringToUpperCase('hello')
.then((result) => {
    console.log(result) 
})
.catch((error) => {
    console.error(error)
})