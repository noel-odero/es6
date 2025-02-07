// Edge Case 1
const person = { name: 'John', age: 30 };
const { name, age, profession = 'Unknown' } = person;
console.log(name);
console.log(age);
console.log(profession);

// Edge Case 2
const user = {
  id: 101,
  personalInfo: {
    name: 'Alice',
    age: 25,
  },
  posts: ['Post 1', 'Post 2']
};

const {
  personalInfo: { name: userName, age: userAge },
  posts: [firstPost, secondPost]
} = user;

console.log(userName);
console.log(userAge);
console.log(firstPost);
console.log(secondPost);

// Edge Case 3
const data = { prop1: 'Value 1', prop2: 'Value 2' };
const { prop1: renamedProp1, prop2: renamedProp2 } = data;
console.log(renamedProp1);
console.log(renamedProp2);

// Edge Case 4
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);