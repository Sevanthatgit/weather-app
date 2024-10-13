async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'b1b15e88fa797225412429c1c50c122a1'; // Replace with your actual OpenWeatherMap API key
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === "200") {
            const weatherInfo = data.list[0]; // Get the first forecasted weather data

            document.getElementById('result').innerHTML = `
                <h2>${data.city.name}, ${data.city.country}</h2>
                <p>🌡️ Temperature: ${weatherInfo.main.temp}°C</p>
                <p>🌤️ Weather: ${weatherInfo.weather[0].description}</p>
                <p>🌬️ Wind Speed: ${weatherInfo.wind.speed} m/s</p>
            `;
        } else {
            document.getElementById('result').innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML = `<p>Error fetching data!</p>`;
    }
}
