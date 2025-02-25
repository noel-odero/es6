// Create a variable with the name myFavoriteFlavors and give it the value of an empty Set object. Then use the .add() method to add the following strings to it:

// "chocolate chip"
// "cookies and cream"
// "strawberry"
// "vanilla"
// Then use the .delete() method to remove "strawberry" from the set.

let myFavoriteFlavors = new Set()
myFavoriteFlavors.add("chocolate chip").add("strawberry").add("vanilla")

console.log(myFavoriteFlavors)
myFavoriteFlavors.delete("vanilla")

console.log(myFavoriteFlavors)