// Mock weather data (simulating API response)
const mockWeatherData = {
  "london": {
    location: { city: "London", country: "UK" },
    current: { temp: 22, feelsLike: 21, humidity: 65, windSpeed: 12, windDirection: "SW", condition: "Partly Cloudy" },
    forecast: [
      { day: "Monday", high: 23, low: 16, condition: "Sunny" },
      { day: "Tuesday", high: 20, low: 14, condition: "Rainy" },
      { day: "Wednesday", high: 19, low: 13, condition: "Cloudy" },
      { day: "Thursday", high: 21, low: 15, condition: "Partly Cloudy" },
      { day: "Friday", high: 24, low: 17, condition: "Sunny" }
    ]
  },
  "tokyo": {
    location: { city: "Tokyo", country: "Japan" },
    current: { temp: 28, feelsLike: 31, humidity: 80, windSpeed: 8, windDirection: "E", condition: "Humid" },
    forecast: [
      { day: "Monday", high: 29, low: 23, condition: "Humid" },
      { day: "Tuesday", high: 27, low: 22, condition: "Rainy" },
      { day: "Wednesday", high: 30, low: 24, condition: "Sunny" },
      { day: "Thursday", high: 31, low: 25, condition: "Sunny" },
      { day: "Friday", high: 28, low: 23, condition: "Cloudy" }
    ]
  },
  "sydney": {
    location: { city: "Sydney", country: "Australia" },
    current: { temp: 16, feelsLike: 14, humidity: 55, windSpeed: 20, windDirection: "S", condition: "Windy" },
    forecast: [
      { day: "Monday", high: 17, low: 11, condition: "Windy" },
      { day: "Tuesday", high: 19, low: 12, condition: "Sunny" },
      { day: "Wednesday", high: 18, low: 13, condition: "Cloudy" },
      { day: "Thursday", high: 20, low: 14, condition: "Sunny" },
      { day: "Friday", high: 21, low: 15, condition: "Sunny" }
    ]
  },
  "cairo": {
    location: { city: "Cairo", country: "Egypt" },
    current: { temp: 36, feelsLike: 39, humidity: 25, windSpeed: 10, windDirection: "N", condition: "Hot" },
    forecast: [
      { day: "Monday", high: 37, low: 26, condition: "Hot" },
      { day: "Tuesday", high: 38, low: 27, condition: "Hot" },
      { day: "Wednesday", high: 36, low: 25, condition: "Sunny" },
      { day: "Thursday", high: 35, low: 24, condition: "Sunny" },
      { day: "Friday", high: 37, low: 26, condition: "Hot" }
    ]
  }
};

// Simulated API fetch (replaces real API call)
function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      const normalized = city.toLowerCase().trim();
      const data = mockWeatherData[normalized];

      if (data) {
        resolve(data);
      } else {
        // Generate a realistic mock for any city using what we have
        const cities = Object.keys(mockWeatherData);
        const randomCity = cities[Math.floor(Math.random() * cities.length)];
        const base = mockWeatherData[randomCity];

        // Slightly modify the data so it looks unique
        const mockCity = {
          location: { city: city.charAt(0).toUpperCase() + city.slice(1), country: "Unknown" },
          current: {
            ...base.current,
            temp: base.current.temp + Math.floor(Math.random() * 6 - 3),
            humidity: Math.min(100, base.current.humidity + Math.floor(Math.random() * 20 - 10))
          },
          forecast: base.forecast.map(day => ({
            ...day,
            high: day.high + Math.floor(Math.random() * 4 - 2),
            low: day.low + Math.floor(Math.random() * 4 - 2)
          }))
        };

        resolve(mockCity);
      }
    }, 800); // 800ms simulated latency
  });
}

// DOM references
const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const loadingCurrent = document.getElementById("loading-current");
const currentContent = document.getElementById("current-content");
const loadingForecast = document.getElementById("loading-forecast");
const forecastContent = document.getElementById("forecast-content");
const errorDisplay = document.getElementById("error-display");

const cityName = document.getElementById("city-name");
const country = document.getElementById("country");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const forecastGrid = document.querySelector(".forecast-grid");

// Hide error helper
function hideError() {
  errorDisplay.style.display = "none";
}

// Show error helper
function showError(message) {
  errorDisplay.textContent = message;
  errorDisplay.style.display = "block";
}

// Update current weather UI
function updateCurrentWeather(data) {
  cityName.textContent = data.location.city;
  country.textContent = data.location.country;
  temperature.textContent = `${data.current.temp}°C`;
  condition.textContent = data.current.condition;
  feelsLike.textContent = `${data.current.feelsLike}°C`;
  humidity.textContent = `${data.current.humidity}%`;
  wind.textContent = `${data.current.windSpeed} km/h ${data.current.windDirection}`;

  loadingCurrent.style.display = "none";
  currentContent.style.display = "block";
}

// Update forecast UI
function updateForecast(data) {
  forecastGrid.innerHTML = "";

  for (const day of data.forecast) {
    const dayEl = document.createElement("div");
    dayEl.classList.add("forecast-day");

    dayEl.innerHTML = `
      <div class="day-name">${day.day}</div>
      <div class="day-temp">${day.high}° / ${day.low}°</div>
      <div class="day-condition">${day.condition}</div>
    `;

    forecastGrid.appendChild(dayEl);
  }

  loadingForecast.style.display = "none";
  forecastContent.style.display = "block";
}

// Main fetch function (async)
async function getWeather(city) {
  hideError();

  // Show loading states
  loadingCurrent.style.display = "block";
  currentContent.style.display = "none";
  loadingForecast.style.display = "block";
  forecastContent.style.display = "none";

  try {
    const data = await fetchWeather(city);
    updateCurrentWeather(data);
    updateForecast(data);
  } catch (error) {
    showError(`Failed to fetch weather: ${error.message}`);
    loadingCurrent.style.display = "none";
    loadingForecast.style.display = "none";
  }
}

// Event listeners
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) {
      getWeather(city);
    }
  }
});

// Load default city on page load
document.addEventListener("DOMContentLoaded", () => {
  getWeather("London");
});
