const API_KEY = 'YOUR_API_KEY';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`City not found (${response.status})`);
  }
  return response.json();
}

function displayWeather(data) {
  const { name, main, weather, wind } = data;
  weatherResult.innerHTML = `
    <h2>${name}</h2>
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="${weather[0].description}" />
    <p><strong>${Math.round(main.temp)}°C</strong> — ${weather[0].description}</p>
    <p>Humidity: ${main.humidity}% | Wind: ${wind.speed} m/s</p>
  `;
}

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) return;
  weatherResult.innerHTML = '<p>Loading...</p>';
  try {
    const data = await getWeather(city);
    displayWeather(data);
  } catch (err) {
    weatherResult.innerHTML = `<p style="color:red">${err.message}</p>`;
  }
});

cityInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchBtn.click();
});
