// Create a function that applies multiple transformations to a string using callbacks.

function transformString(text, callback1, callback2){
    const transformedText = callback1(text);
    return callback2(transformedText);
}



const toUpperCase = (text) => text.toUpperCase();
const addExclamation = (text) => text + "!!!";  

const addQuestionMark = (text) => text + "???";
const addPeriod = (text) => text + ".";

console.log(transformString("hello", toUpperCase, addExclamation)); // "HELLO!!!"