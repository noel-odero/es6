// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and 'async/await'.

function fetchUsers(userId){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(`Fetched Users`)
            resolve({
                id: userId,
                name: 'John Doe',
                email: 'john@gmail.com'
            })
        }, 1000)
    })
}

function fetchPosts(userId){
    return new Promise((resolve) => {
        setTimeout(()=> {
            console.log(`Fetched Posts`)
            resolve([
                {id:1, title: "Post one", body: "This is post one"},
                {id :2, title: "Post two", body: "This is post two"}
            ])
        }, 1500)
    })
}

function fetchComments(postId){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(`fetched comments`)
            resolve([
                {id: 101, title: 'Comment one', body: 'This government is annoying'},
                {id: 102, title: 'comment two', body:"we sympathize and move on"}
            ])
        }, 2000)
    })
}


async function processUserData(userId) {
    try {
        const user = await fetchUsers(userId);
        const posts = await fetchPosts(user.id);
        const comments = await fetchComments(posts[0].id);

        return {
            user,
            firstPost: posts[0],
            comments
        };
    } catch (err) {
        console.error("Error in async sequence:", err);
    }
}


processUserData(1).then(data => {
    console.log("User Data:", data);
}   )
.catch(err => {
    console.error("Error:", err);
}); 



