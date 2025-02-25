// Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.

// average(2, 6) should return 4
// average(2, 3, 3, 5, 7, 10) should return 5
// average(7, 1432, 12, 13, 100) should return 312.8
// average() should return 0

function average(...args){
    return [...args].reduce((curr,acc) => curr + acc) / [...args].length
}

console.log(average(2, 6))