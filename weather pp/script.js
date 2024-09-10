document.getElementById('getWeatherBtn').addEventListener('click', function() {
    let location = document.getElementById('locationInput').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a city name.');
    }
});

function getWeather(location) {
    const apiKey = '2bbecd3ac0897016f0f0518e88bd1d83'; // Replace with your Weather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherDisplay = document.getElementById('weatherDisplay');
                weatherDisplay.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                alert('City not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
