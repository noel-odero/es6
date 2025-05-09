function filterArray(array, callback) {
    const result = []
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            result.push(array[i])
        }
    }
    return result
}

const numbers = [1,2,3,4,45,5]

function isEven(num){
    return num % 2 === 0
}

console.log(filterArray(numbers, isEven))