async function getWeatherData() {
    const apiKey = '731ca1132aa7d836af27b31d20f52261'; // Replace with your OpenWeatherMap API key
    const city = 'Nigeria'; // Replace with your desired location
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Process and display the current weather
        const currentTemp = Math.round(data.main.temp);
        const weatherDescription = capitalizeWords(data.weather.map(w => w.description).join(", "));
        document.getElementById('weather-info').innerHTML = `<p>Current Temperature: ${currentTemp}°C</p><p>${weatherDescription}</p>`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data.</p>';
    }
}

// Function to capitalize each word in a string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Function to get weather forecast (3-day)
async function getWeatherForecast() {
    const apiKey = '731ca1132aa7d836af27b31d20f52261'; // Replace with your OpenWeatherMap API key
    const city = 'Nigeria'; // Replace with your desired location
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Process and display the forecast
        const forecastDiv = document.getElementById('forecast');
        let forecastHTML = '';

        // Loop through the forecast data for the next three days
        for (let i = 0; i < data.list.length; i += 8) { // 8 data points per day
            const day = new Date(data.list[i].dt * 1000);
            const dayTemp = Math.round(data.list[i].main.temp);
            const dayWeather = capitalizeWords(data.list[i].weather.map(w => w.description).join(", "));
            forecastHTML += `<p>${day.toLocaleDateString()}: ${dayTemp}°C, ${dayWeather}</p>`;
        }

        forecastDiv.innerHTML = forecastHTML;
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
        document.getElementById('forecast').innerHTML = '<p>Error fetching weather forecast.</p>';
    }
}

// Function to load company spotlight from JSON data
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const container = document.querySelector('.company-spotlights');

    container.innerHTML = ''; // Clear the existing members

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('spotlights');
        memberCard.innerHTML = `
            <h3>${members.name}</h3>
            <p>${member.tagline}</p>
            <p>Email: ${member.email}</p>
            <p>Phone: ${member.phone}</p>
            <p>URL: <a href="${member.website}">${member.website}</a></p>
        `;
        container.appendChild(memberCard);
    });
}

// Update footer with current year and last modified date
document.getElementById('year').innerText = new Date().getFullYear();
document.getElementById('lastModified').innerText = document.lastModified;

// Load weather and company data on page load
window.onload = () => {
    getWeatherData();
    getWeatherForecast();
    loadCompanySpotlights();
};

// Toggle navigation menu for mobile view
// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('.nav-list');

// hamburger.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });
document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-list").classList.toggle("active");
});
