const fetchData = async (url) => {
    try {
        const response = await fetch(url);

        // Check for HTTP errors
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        // Debug: Check content type before parsing
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error(`Invalid content type: ${contentType}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return { error: error.message };
    }
};

fetchData("https://jsonplaceholder.typicode.com/posts/1")
    .then(data => console.log(data))
    .catch(error => console.error("Fetch failed:", error));
