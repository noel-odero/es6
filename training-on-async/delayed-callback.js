// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function delayedCallback(callback) {
  setTimeout(callback, 2000);
}   

// Example usage:
delayedCallback(() => {
  console.log("This message is displayed after a 2-second delay.");
});

