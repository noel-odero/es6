//  Extend the fetchToDo function from Question 4 to include custom headers in the request. Specifically, you need to add a User-Agent header with a custom value and a Content-Type header set to application/json. Additionally, modify the function to send a JSON payload in the request body. After sending the request, the function should parse the JSON response and log the parsed object to the console

function fetchToDo() {
  const xhr = new XMLHttpRequest();
  const url = "https://jsonplaceholder.typicode.com/todos";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  // Note: Setting the 'User-Agent' header is restricted in browsers and may be ignored or cause an error.
  // xhr.setRequestHeader("User-Agent", "CustomUserAgent/1.0");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 201) {
        try {
          const data = JSON.parse(xhr.responseText);
          console.log("Response Data:", data);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error(`Request failed with status ${xhr.status}: ${xhr.statusText}`);
      }
    }
  };

  xhr.onerror = function () {
    console.error("Network error occurred during the request.");
  };

  const payload = {
    title: "Learn Fetch API",
    completed: false
  };

  xhr.send(JSON.stringify(payload));
}
