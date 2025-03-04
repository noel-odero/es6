// Create a Map where the keys are student names, and the values are their grades. Write a function that returns the grade of a specific student.

// const studentGrades = new Map()
// const grades = {
//     'Noel' : 90,
//     "Eldrige" : 92,
//     "Awino" : 98
// }

const studentGrades = new Map([
    ['Alice', 80],
    ["Peter", 90],
    ["Awino", 70]
])

const grade = (student) => studentGrades.get(student)


console.log(grade('Alice'))

// studentGrades.set("Alice", 80);
// studentGrades.set("Peter", 90);
// studentGrades.set("Awino", 70);


// console.log(studentGrades)