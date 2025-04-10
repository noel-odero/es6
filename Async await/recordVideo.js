const recordVideoOne = new Promise((resolve, reject) => {   
    resolve('Video 1 recorded');
});
const recordVideoTwo = new Promise((resolve, reject) => {   
    resolve('Video 2 recorded');
}); 
const recordVideoThree = new Promise((resolve, reject) => {   
    resolve('Video 3 recorded');
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
    .then((messages) => { 
        console.log(messages)
    })
    .catch((error) => {
        console.log(error)
    })