// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

// function compareObjects(a, b) {
// 	Object.keys(a).forEach(key => {
// 		if (a[key] !== b[key]) {
// 			return false;
// 		}
// 	});
// 	return true;
// }

const compareObjects = (a, b) => {
	return Object.keys(b).every(key => a.hasOwnProperty(key) && a[key] === b[key])
}




console.log(compareObjects({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }));