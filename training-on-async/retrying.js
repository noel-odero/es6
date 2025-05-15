// Write a JavaScript function that fetches data from an 
// API and retries the request a specified number of times if it fails. 
// You should log to the console “Retrying….” when retrying the request.


async function fetchDatawithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched data:", data);
            return data;
        } catch (error) {
            console.error("Fetch failed:", error);
            if (i < retries - 1) {
                console.log("Retrying...");
            }
        }
    }
    throw new Error("Max retries reached");
}


fetchDatawithRetry("https://jsonplacehlder.typicode.com/posts/1", 3)
    .then(data => {
        console.log("Final data:", data);
    })
    .catch(error => {
        console.error("Final error:", error);
    });