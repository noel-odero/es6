function * generateId() {
	let id = 1;

	while (true){
		yield id
		id++
	}
}

const generatorObject = generateId()
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())