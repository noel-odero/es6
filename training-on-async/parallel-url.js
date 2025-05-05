function downloadUrls(urls) {
    const promises = urls.map(url => {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => {
                if(!res.ok) throw new Error(`Could not fetch data. Error status : ${res.status}`)
                return res.text()
            }).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    })

    return Promise.all(promises)
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];
  
  downloadUrls(urls)
    .then(contents => {
      console.log('Downloaded contents:', contents);
    })
    .catch(error => {
      console.log('Error:', error.message);
    });