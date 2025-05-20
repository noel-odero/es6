// // -1. What is fetch() API and Syntax - An API that is provided by JS, 
// // -2. Using async/await with fetch
// // -3. HTTP methods
// // -4. 


// // fetch(url, options)
// //     .then(res => res.json())
// //     .then(data => console.log(data))
// //     .catch(err => console.error(err))


// // // using aync await
// // async function fetchData(url){
// //     try{
// //         const res = await fetch(url, options);
// //         const data = await res.json()
// //         console.log(data)
    
// //     } catch(err){
// //         console.error(err)
    
// //     }
// // }

// // fetchData('https://example.com')


async function fetchPosts(){
    const API_URL = "https://jsonplaceholder.typicode.com/todos";
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data)

    } catch(error) {
        console.error(error)

    }
}

fetchPosts()


// fetch using query params

async function fetchPostsWithComments(){
    const API_URL =  "https://localhost:3000/posts";
    const queryPArams = {
        _embed: "comments",
    }
   
    try {
        const queryString = new URLSearchParams(queryParams).toString();
        const url = `${API_URL}${queryString}`
        const res = await fetch(url);
        const data = await res.json();
        console.log(data)

    } catch(error){
        console.log(error)

    }
}

// fetchPostsWithComments()



// fetch usage: creating resource

async function createPost(postDAta){
    const API_URL = "https://jsonplaceholder.typicode.com/todos";
    try {
       const res =  await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postDAta)
        });
        const result = await res.json();
        console.log(result)

    } catch(error){
        console.log(error)
    }
}
const newPostData = {
    userId: 101,
    id: 101,
    title: 'new post!',
    completed: 'true'
}
createPost(newPostData)


// Updating an entire resource


async function updatePost(postData) {
    console.log('updating data')
    const url = "https://jsonplaceholder.typicode.com/todos/101";
    try {
        const res = await fetch(url, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postData)
        })
        const data = await res.json();
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}
const postData = {
    userId: 101,
    id: 101,
    title: 'new post now!',
    completed: 'false'
}

updatePost(postData)


// delete post

async function deleteData(postId) {
  const API_URL = `https://jsonplaceholder.typicode.com/todos/${postId}`;
  try {
    const res = await fetch(API_URL, {
      method: "DELETE",
    });

    if (res.ok) {
      console.log(`Post with ID ${postId} deleted successfully.`);
    } else {
      console.error(`Failed to delete post with ID ${postId}. Status: ${res.status}`);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

deleteData(1);

// custom headers
//  To make a post, patch or put, you pass headers like application/json. If you are dealing with authentication for example, you use authorization header

async function login(){
    const API_URL = "http://localhost:3000/login";

    try{
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer secret-token",
                "Custom-header": "Learn fetch api"
            },
            body: JSON.stringify({Username: "missnoel", password: "password"})
        })
        const data = await res.json();
        console.log(data)

    } catch(err){
        console.log(err)
    }
}

login()

// Creating a request object


