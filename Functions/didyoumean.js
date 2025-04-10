// Did you mean ...?  

// This function is used to suggest the correct spelling of a word.
// The function takes a string of words and a word as arguments.
// It returns the closest match to the word in the string of words.
// The function uses the levenshtein distance algorithm to calculate the distance between the word and each word in the string.
// It then returns the word with the smallest distance.
// The function is case-insensitive.

function Dictionary(words) {
    this.words = words;
  }

Dictionary.prototype.findMostSimilar = function(term) {
    return this.words.reduce((acc, curr) => {
        const distance = levenshteinDistance(term, curr);
        if (distance < acc.distance) {
            acc.distance = distance;
            acc.word = curr;
        }
        return acc;
    }, {distance: Infinity, word: ''}).word;
}

function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    
// Create a matrix with the length of the strings + 1
// Fill the first row with the index of each character
    const matrix = Array.from({length: a.length + 1}, (_, i) => Array.from({length: b.length + 1}, (_, j) => i + j));

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
        }
    }

    return matrix[a.length][b.length];
}

const dictionary = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
console.log(dictionary.findMostSimilar('strawbery')); // 'strawberry'