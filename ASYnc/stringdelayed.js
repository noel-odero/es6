// Write an async function that returns a string after waiting for 2 seconds. Use the setTimeout function to simulate the delay.

async function delayedMessage() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "This message was delayed by 2 seconds.";
}

delayedMessage().then(message => console.log(message));


    
