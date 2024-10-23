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
// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[data-src]');
    const imgOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px 50px 0px"
    };
  
    const loadImages = (image) => {
      image.src = image.getAttribute('data-src');
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        loadImages(entry.target);
        observer.unobserve(entry.target);
      });
    }, imgOptions);
  
    images.forEach(image => {
      observer.observe(image);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // LocalStorage for Last Visit Message
    const visitMessage = document.getElementById('visit-message');
    const lastVisit = localStorage.getItem('lastVisit');
    const currentVisit = Date.now();

    if (lastVisit) {
        const daysDifference = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', currentVisit);

    // Generate Calendar for the Current Month
    const calendarContainer = document.getElementById('calendar-container');
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    function generateCalendar(month, year) {
        const firstDay = new Date(year, currentDate.getMonth(), 1).getDay();
        const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
        let calendar = `<table><thead><tr><th colspan="7">${month} ${year}</th></tr><tr>
            <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
        </tr></thead><tbody><tr>`;

        for (let i = 0; i < firstDay; i++) {
            calendar += '<td></td>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            if ((day + firstDay - 1) % 7 === 0 && day !== 1) {
                calendar += '</tr><tr>';
            }
            calendar += `<td>${day}</td>`;
        }

        calendar += '</tr></tbody></table>';
        return calendar;
    }

    calendarContainer.innerHTML = generateCalendar(month, year);
});


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
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});