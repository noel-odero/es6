function * simpleGenerator() {
	console.log("Before 1")
	yield 1
	console.log("After 1")
	console.log("Before 2")
	yield 2
	console.log("After 2")
	console.log("Before 3")
	yield 3
	console.log("After 3")
}

const generatorObject = simpleGenerato

const generatorObject2 = simpleGenerator()
console.log(generatorObject.next())
console.log(generatorObject2.next())
console.log(generatorObject.next())
console.log(generatorObject.next())





// Purpose of a generators is to run a code and return a value, then run some more code and return another value
