// Write a function that takes two parameters, one of which has a default value. If no value is passed for that parameter, the default value should be used.

const greeting = ( age, instruction = 'apply') => `If you are ${age} years old and above, you are encouraged to ${instruction} for the job`

console.log(greeting(20))