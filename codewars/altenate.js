// Write a function

// alternate_sort(l)
// that combines the elements of an array by sorting the elements ascending by their absolute value and outputs negative and non-negative integers alternatingly (starting with the negative value, if any).

// E.g.

// alternate_sort([5, -42, 2, -3, -4, 8, -9,]) == [-3, 2, -4, 5, -9, 8, -42]
// alternate_sort([5, -42, 2, -3, -4, 8, 9]) == [-3, 2, -4, 5, -42, 8, 9]
// alternate_sort([5, 2, -3, -4, 8, -9]) == [-3, 2, -4, 5, -9, 8]
// alternate_sort([5, 2, 9, 3, 8, 4]) == [2, 3, 4, 5, 8, 9]



function combineSortedAlternating(arr) {
    
    const newArr = arr.sort((a, b) => Math.abs(a) - Math.abs(b));

    if (!newArr.some(num => num < 0)) {
        return newArr;
    } else {
        const negatives = newArr.filter(num => num < 0);
        const nonNegatives = newArr.filter(num => num >= 0);
        const result = [];
        let i = 0;
    
    while (negatives.length || nonNegatives.length) {
        if (i % 2 === 0 && negatives.length) {
            result.push(negatives.shift());
        } else if (i % 2 !== 0 && nonNegatives.length) {
            result.push(nonNegatives.shift());
        } else if (negatives.length) {
            result.push(negatives.shift());
        } else if (nonNegatives.length) {
            result.push(nonNegatives.shift());
        }
        i++;
        }

    return result;
    }
  } 

console.log(combineSortedAlternating([5, 2, 9, 3, 8, 4]))