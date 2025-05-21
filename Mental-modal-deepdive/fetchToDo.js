// Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the given URL (https://jsonplaceholder.typicode.com/todos/1). The function should handle both successful responses and errors (such as network issues or invalid URLs). Upon receiving a successful response, it should log the fetched data to the console. If there's an error, it should catch the error and log an appropriate message


function fetchToDo (){
    let request = new XMLHttpRequest();
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    request.open('GET', url, true);

    request.onload = function (){
        if (request.status === 200) {
            try{
                // When you use XMLHttpRequest to fetch data from a server, the response is stored as a text string in the responseText property
                const data = JSON.parse(request.responseText)
                console.log(`Fetched data: ${data}`)

            } catch (e) {
                console.error(`Error: ${e}`)
            }
        } else {
            console.error(`Request failed. Status: ${this.status}`)
        }
    }

    request.onerror = function(){
        console.error("Network error has occurred")
    };

    request.send();
}

fetchToDo()