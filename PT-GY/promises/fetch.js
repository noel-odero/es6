function fetchData(url){
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => {
            if(!res.ok) throw new Error(`HTTP ERROR! status: ${res.status}`)

                return res.json()
        })
        .then(data => resolve(data))
    })
    .catch(err => reject(err))
    }



fetchData("https://jsonplaceholder.typicode.com/posts")
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err)
    })