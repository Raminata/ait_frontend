const API_KEY = 'e0877522ccb542f44a86a7af520ae44';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherContainer = document.getElementById('weatherContainer');

getWeatherButton.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.code === 'Enter') {
        console.log('We click enter:)');
    }
})

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    if(location) {
const apiUrl = `${API_BASE_URL}?q=${location}&appid=${API_KEY}`;
fetch(apiUrl)
.then(res => res.json())
.then(({main}) => {
    console.log(main);
    displayWeather(data);
    })
    .catch(error => {
        console.log(error);
    weatherContainer.innerHTML = 'Failed to fetch weather data';
});
}
})

function displayWeather(weatherData) {
    console.log(weatherData);
    const {name, sys: {country}, main, main: {humidity}, weather, wind: {speed}, visibility} = weatherData;
    
    
    //const country = sys.country;
    const temperatureC =Math.round(main.temp - 273.15);
    const temperatureMaxC = Math.floor(main.temp_max - 273.15);
    const temperatureMinC = (main.temp_min - 273.15).toFixed(1);
    const weatherMain = weather[0].main;
    const weatherDescription = weather[0].description;
    //const humidity = main.humidity;
    //const windSpeed = wind.speed;
    const visibilityDistance = visibility / 1000;

    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');
    weatherContainer.innerHTML = '';

    weatherCard.innerHTML = `
    <h2>${name}, ${country}</h2>
    <p>Temperature: ${temperatureC}</p>
    <p>Max temperature: ${temperatureMaxC}</p>
    <p>Min temperature: ${temperatureMinC}</p>
    <p>Weather: ${weatherMain}</p>
    <p>Humidity: ${humidity}</p>
    <p>Wind Speed: ${speed}</p>
    <p>Visibility: ${visibilityDistance} km</p>
    `;
    weatherContainer.append(weatherCard);
}