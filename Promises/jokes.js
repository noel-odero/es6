// const fetchData = async (url) => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);  // Check the full structure

//         // Now you can check for the key you need
//         if (data.jokes) {
//             console.log(data.jokes);
//         } else {
//             console.error('Jokes data not found');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };


async function  fetchData(apiUrl) {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return(data)
  
    
}

console.log(fetchData('http://great.jokes/christmas'))