// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class Person {
	constructor(name, age, country) {
		this.name = name;
		this.age = age;
		this.country = country
	}

	displayDetails(){
		console.log(`My name is ${this.name} and I am ${this.age} years old. I am a proud citizen of ${this.country}.`)
	}
}

const person1 = new Person("Noel Odero", 25, "Kenya")
const person2 = new Person("Ewing", 30, "CAR")

person1.displayDetails()
person2.displayDetails()