// // You are building a web application that fetches data from multiple APIs to display information about different countries. You need to fetch the country details from one API and the weather information for the capital city from another API.,

// Here are the requirements:

// Use the fetch API to get the country details from [https://restcountries.com/v3.1/name/{countryName}](https://restcountries.com/v3.1/name/%7BcountryName%7D).,,
// Use the fetch API to get the weather details from [https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true](https://api.open-meteo.com/v1/forecast?latitude=%7Blat%7D&longitude=%7Blon%7D&current_weather=true).,,
// The weather API requires the latitude and longitude of the capital city, which you will get from the country details.,,
// Display the country's name, capital city, and current temperature in the console.,,

// Example:

// If the user searches for "France", your application should:

// Fetch country details from https://restcountries.com/v3.1/name/France.,,
// Extract the capital city and its coordinates (latitude and longitude).,,
// Fetch the current weather for the capital city from the weather API.,,

// Display the results in the console as follows:
// Country: France
// // Capital: Paris
// Current Temperature: 18°C


async function fetchWeather(countryName) {
    const COUNTRY_URL = `https://restcountries.com/v3.1/name/`
    // const WEATHER_URL = `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true`

    try{
        const countryData = await fetch(`${COUNTRY_URL}${countryName}`)
        const res = await countryData.json();
        const lat = res[0].latlng[0]
        const lon = res[0].latlng[1]
        const weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        const resWeather = await weatherData.json()
        // console.log(res)
        console.log(`Country: ${countryName}, Capital: ${res[0].capital[0]}, Current Temperature: ${resWeather.current_weather.temperature}`)
    } catch (e) {

        console.log(e)
    }

}

fetchWeather('Libya')