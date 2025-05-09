// Create a function that counts from 1 to 5, with a 1-second delay between each number, using a callback to print each number

function counter (callback){
    let count = 1;
    setInterval(()=>{
        if(count<= 5){
            callback(count);
            count++
        } else{
            clearInterval(this)
        }
    }, 1000)
}

// counter((num) => {
//     console.log(num);
// })