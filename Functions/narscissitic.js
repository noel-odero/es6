function narcissistic(value) {
    let newArr = value.toString().split('')
    let pow = newArr.length
    let total = 0;
    for (let num of newArr){
        total += Number(num) ** pow
    }

    return total == value
  }

  console.log(narcissistic(153))