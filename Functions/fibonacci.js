function* fibonacciGenerator(limit) {
    let a = 0;
	let b = 1;

    while (a <= limit) {
        yield a;

        [a, b] = [b, a + b];
	 }
}



const fibGen = fibonacciGenerator(20);
console.log(fibGen)
let fibArr = []
for (let num of fibGen) {
	fibArr.push(num)

    console.log(fibArr);
}