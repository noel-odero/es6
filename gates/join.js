// Practical Question
// Create a function that performs a JOIN operation on two arrays of objects, based on a common property, and returns a new array of merged objects.


// output: [
//        {id: 1, name: 'John', department: 'IT', salary: 50000},
//        {id: 2, name: 'Jane', department: 'HR', salary: 60000}
// ]

function sqlJoin(arr1, arr2) {
    let result = [];

    for(let a of arr1){
        for(let b of arr2){
            if(a.id === b.id){
                result.push({...a, ...b})
            }
        }
    }
    return result
}

const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
];

const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
];

const result = sqlJoin(employees, salaries);
console.log(result);