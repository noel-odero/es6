// Create a function that performs a deep comparison between two arrays of objects, checking for equality of nested properties.



const deepEqual = (obj1, obj2) => {
        if (obj1 === obj2) return true

        if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 ===null || obj2 === null){
            return false;
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2)


        if(keys1.length !== keys2.length) return false;

        for (let key of keys1) {
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true
    
}

function deepEqualArrays(arr1, arr2) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if(arr1.length !== arr2.length) return false;


    return arr1.every((obj, index) => deepEqual(obj, arr2[index]))
}


const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

console.log(deepEqualArrays(array1, array2));


const array3 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array4 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

console.log(deepEqualArrays(array3, array4));

