// async - we use async to return a promise
// we use await to wait and handle the promise returned

function fetchUserDetails(userId) {
    return {'name': "Robin", 'like': ['Pizza']}
}


async function caller(){
    const user = await fetchUserDetails();
    console.log(user);
}
caller()
// you cannot use await keyword in a regular non-asynchronous fn nad can only use it at the top level bodies of modules
// the function after await keyword may or may not be an async fn


const validateUser = ({userId, password}) => {
    return new Promise((resolve, reject) => {
        if(userId && password){
            resolve('Authenticated')
        } else {
            reject({message: 'userid or password is missing'})
        }
    })
}

const app = async () => {
    const data = {
        userId: "",
        password: ""
    }

    try{
        const result = await validateUser(data)
        console.log(result);
    } catch (e){
        console.log(e.message)
    }

}

app()