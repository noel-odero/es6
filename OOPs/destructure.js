// Given the following object, use destructuring to assign the values to appropriate variables:
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

const { name, age, address:{city, state}} = user;

console.log(name);
console.log(city)
console.log(state)
console.log(age)