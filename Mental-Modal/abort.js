const controller = new AbortController()

const url = "https://jsonplaceholder.typicode.com/todos/1"

const fetchTodo = async() => {
    try{
        const response = await fetch(url, {signal :controller.signal})
        const todo = await response.json()
        console.log(todo)
    } catch(e){
        if(e.name === "AbortError")
        console.log(`Aborted because of me: &{e}`)
    }
}


fetchTodo()

controller.abort()