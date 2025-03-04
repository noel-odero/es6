// Write a function using the rest operator that takes any number of arguments and returns their average.

const average = (...args) => args.reduce((c,a) => c + a) / args.length




console.log(average(5,5))