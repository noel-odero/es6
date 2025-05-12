// Create a Promise that resolves with the message "Success!" after 1 second or rejects with "Failure!" after 1 second, based on a random condition.


function randomPromise(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const success = Math.random() > 0.5
            if(success){
                resolve("Success!")
            } else{
                reject("Failure!")
            }
        }, 1000)
    })
}

randomPromise()
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error(error)
    })