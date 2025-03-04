// You are given a 5-day sales report as a JSON object. Each day contains an array of 8 sales amounts. Your task is to return an array of the most frequent sales amount for each day. If there is a tie, return the amount that appears last in the day's array.

// const salesReport = {
// "sales": [
// [100, 150, 200, 200, 200, 180, 150, 120],  
// [300, 320, 300, 300, 320, 320, 320, 350], 
// [500, 500, 450, 450, 450, 450, 500, 500],  
// [600, 750, 750, 800, 800, 800, 750, 600],  
// [900, 950, 950, 900, 900, 1000, 1000, 1000] ]
// };

// //output : [200, 320, 500, 800, 1000]

const frequentSales = (report) => {
    const data = report['sales']
    let finalCount = {}
   
    for(let i = 0; i < data.length; i++){
        const newArr = data[i].reduce((count, item) => {
            count[item] = (count[item] || 0) + 1
            return count
        }, {} )
        for (let key in newArr) {
            finalCount[key] = (finalCount[key] || 0) + newArr[key];
    }
    Object.values(finalCount)
    }
    return finalCount
}

const salesReport = {
"sales": [
[100, 150, 200, 200, 200, 180, 150, 120],  
[300, 320, 300, 300, 320, 320, 320, 350], 
[500, 500, 450, 450, 450, 450, 500, 500],  
[600, 750, 750, 800, 800, 800, 750, 600],  
[900, 950, 950, 900, 900, 1000, 1000, 1000] ]
};

console.log(frequentSales(salesReport))






