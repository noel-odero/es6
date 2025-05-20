// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function delayedCallback(callback) {
  setTimeout(callback, 2000);
}   


delayedCallback(() => {
  console.log("2 seconds later!");
});

