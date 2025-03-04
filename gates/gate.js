const mostFrequentSalesPerArray = (report) => {
    const data = report['sales'];
    const result = [];

    for (let day of data) {
        const count = {};
        let mostFrequent = null;
        let highestCount = 0;

        for (let sale of day) {
            count[sale] = (count[sale] || 0) + 1;

            // If new max frequency found OR if there's a tie, take the last occurrence
            if (count[sale] > highestCount || (count[sale] === highestCount && sale !== mostFrequent)) {
                highestCount = count[sale];
                mostFrequent = sale;
            }
        }

        result.push(mostFrequent);
    }

    return result;
};


const salesReport = {
    "sales": [
        [100, 150, 200, 200, 200, 180, 150, 120],  
        [300, 320, 300, 300, 320, 320, 320, 350], 
        [500, 500, 450, 450, 450, 450, 500, 500],  
        [600, 750, 750, 800, 800, 800, 750, 600],  
        [900, 950, 950, 900, 900, 1000, 1000, 1000]
    ]
};

console.log(mostFrequentSalesPerArray(salesReport));
