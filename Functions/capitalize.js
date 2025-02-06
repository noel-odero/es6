const capitalizeFirstLetter = (str) => {
	let splitStr = str.split(" ")
	let newArr = []
	for (let i =0; i<splitStr.length; i++){
		newArr.push(splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1))
	}

	return newArr.join(' ')
}

console.log(capitalizeFirstLetter("my name is noel"))