function toCamelCase(s, n) {
    const splitArr = s.split(' ');
    let newArr = [];

    if (n === 1) {
        // First word stays lowercase, rest are capitalized
        newArr.push(splitArr[0].toLowerCase());
        for (let i = 1; i < splitArr.length; i++) {
            let word = splitArr[i];
            let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
            newArr.push(newWord);
        }
        return newArr.join('');
    }
    if (n === 2) {
        for (let i = 0; i < splitArr.length; i++) {
          let word = splitArr[i].toLowerCase();
    
          if (i === splitArr.length - 1) {
            // Last word remains lowercase
            newArr.push(word);
          } else {
            let lastIndex = word.length - 1;
            let newWord =
              word.slice(0, lastIndex) + word[lastIndex].toUpperCase();
            newArr.push(newWord);
          }
        }
        return newArr.join('');
      }
    


}


console.log(toCamelCase('Hello World', 2))