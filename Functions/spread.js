// Clone an array and modify one of its elements using the spread operator.

const arr = [3,5,4,5,6]
const newArr = [...arr]
newArr[0] = 1

console.log(newArr)