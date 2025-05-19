console.log("#Callbacks")
// callbacks function as notification mechanism

// a function as an argument to another function

// Robin's Phone
orderPizza("Veg", "cheese Barbeque", (msg) => {console.log(msg)});

// pizzaend

function orderPizza(type, name, callback){
    console.log(`Pizza ${type} ${name} is ordered`)

    setTimeout(()=>{
        const msg = (`Pizza ${type} ${name} is ready`)
        callback(msg)
    }, 3000)
}