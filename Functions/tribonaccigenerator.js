function* tribonacci(signature, n) {
  if (n === 0) return;

  let [a, b, c] = signature;

  for (let i = 0; i < n; i++) {
    yield a;
    [a, b, c] = [b, c, a + b + c];
  }
}

const fibGen = tribonacci([1, 1, 1], 50);
console.log(fibGen)

let fibArr = []
for (let num of fibGen) {
	fibArr.push(num)

    console.log(fibArr);
}
