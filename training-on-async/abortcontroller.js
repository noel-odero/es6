// Write a function that takes a URL and fetches data from 
// that URL but aborts when the request takes more than 10ms


async function fetchWithTimeout(url, timeout = 10) {

  // Create an AbortController instance to control the fetch request
  const controller = new AbortController();

  // Set a timer that will abort the fetch after `timeout` milliseconds
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    // Make a fetch request with the abort controller's signal
    const response = await fetch(url, { signal: controller.signal });

    // If the fetch succeeds before the timeout, clear the timeout to avoid aborting it
    clearTimeout(timeoutId);

    // Parse the response JSON
    const data = await response.json();

    // Log the fetched data to the console
    console.log("Fetched data:", data);

    // Return the data from the function
    return data;

  } catch (error) {
    // If the fetch was aborted due to the timeout, handle it specifically
    if (error.name === "AbortError") {
      console.error("Fetch aborted due to timeout");
    } else {
      // Handle any other type of fetch error
      console.error("Fetch failed:", error);
    }
  }
}


fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 10);
