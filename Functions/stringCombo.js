const generateSubString = (str) => {
	let output = [];

	for (let i=0; i<str.length; i++){
		for(let j= i + 1; j<=str.length; j++){
			output.push(str.slice(i, j))
		}
	}

	return output.join(",")
}

console.log(generateSubString("dog"))