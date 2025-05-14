// Write an async function that takes multiple Promises and uses Promise.race() to return the result of the first Promise that resolves or rejects.


async function racePromises(promises){
    try{
        const result = await Promise.race(promises);
        console.log(result);
    } catch(err){
        console.log(err)
    }
}

const promise1 = new Promise(resolve => setTimeout(() => resolve("First"), 3000));
const promise2 = new Promise((_, reject) => setTimeout(() => reject("Error!"), 1000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));


racePromises([promise1, promise2, promise3]) 