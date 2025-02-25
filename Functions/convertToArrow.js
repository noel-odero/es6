// Convert the function passed to the map() method into an arrow function.


/*
 * Programming Quiz: Convert Function into an Arrow Function (2-1)
 */

// convert to an arrow function
// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(square) {
// 	return square * square;
// });

console.log(...squares);

const squares = (...args) => [...args].map((square) => square * square)
