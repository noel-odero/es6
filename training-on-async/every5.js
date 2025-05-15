// Write a javascript function that displays a number every 
// two seconds and stops displaying after 5 seconds

// function displayNumber(){
//     return new Promise((resolve) => {
//         let num = 0;
//         const interval = setInterval(() => {
//             console.log(num);
//             num += 1;
//             if (num > 5) {
//                 clearInterval(interval);
//                 resolve();
//             }
//         }, 2000);

//     })
// }

// displayNumber()
//     .then(() => {
//         console.log("Five seconds are up baby!");
//     })
//     .catch(err => {
//         console.error("Error:", err);
//     });


function displayNumber() {
    let count = 1;

    const intervalId = setInterval(() => {
        console.log(count++);
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped displaying numbers");
    }, 5000);
}

displayNumber()
  ;
