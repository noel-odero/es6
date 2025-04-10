// Simple, given a string of words, return the length of the shortest word(s).
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

  console.log(findShort("sweet and sour sauce"))