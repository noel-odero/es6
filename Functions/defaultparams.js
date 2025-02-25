// Create a buildHouse() function that accepts an object as a default parameter. The object should set the following properties to these default values:

// floors = 1
// color = 'red'
// walls = 'brick'
// The function should return the following if no arguments or any empty object is passed to the function.

// Your house has 1 floor(s) with red brick walls.


// function buildHouse({
//     floors = 1,
//     color = 'red',
//     walls = 'brick'
// } = {}){
//     return `Your house has ${buildHouse.floors} floor(s) with ${buildHouse.color} ${buildHouse.walls} walls`
// }

function buildHouse({
    floors = 1,
    color = 'red',
    walls = 'brick'
} = {}) {  // Set an empty object `{}` as the default parameter
    return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
}


console.log(buildHouse())
// Create a buildHouse() function that accepts an object as a default parameter. The object should set the following properties to these default values:

// floors = 1
// color = 'red'
// walls = 'brick'
// The function should return the following if no arguments or any empty object is passed to the function.

// Your house has 1 floor(s) with red brick walls.