function tribonacci(signature, n){
	if(n === 0){
	  return []
	}
	if( n < 3){
	  return signature.slice(0, n)
	}

	let [a, b, c] = signature
	let finalArr = [...signature]

	for(let i =3; i<n; i++){
	  let nextNum = a + b + c
	  finalArr.push(nextNum);

	  [a, b, c] = [b, c, nextNum]
	}

	return finalArr
  }

const fibGen = tribonacci([3,4,5], 50);

let fibArr = []
for (let num of fibGen) {
	fibArr.push(num)

    console.log(fibArr);
}