// Weather Object
const weather = {
  city: "New York",
  temperature: 25,
  condition: "Sunny",
  getWeather: function () {
    // Simulate fetching updated weather data
    const randomTemperature = Math.floor(Math.random() * 35); // Random temp between 0 and 35
    const conditions = ["Sunny", "Cloudy", "Rainy", "Snowy", "Windy"];
    const randomCondition =
      conditions[Math.floor(Math.random() * conditions.length)];

    // Update the object with new values
    this.temperature = randomTemperature;
    this.condition = randomCondition;

    return `Weather updated: ${this.city}, ${this.temperature}°C, ${this.condition}`;
  },
};

// Function to update the UI
function updateWeatherUI() {
  document.getElementById("city-name").textContent = weather.city;
  document.getElementById("temperature").textContent = weather.temperature;
  document.getElementById("condition").textContent = weather.condition;
}

// Initial weather display
updateWeatherUI();

// Event listener for refreshing weather
document
  .getElementById("refresh-weather")
  .addEventListener("click", function () {
    const message = weather.getWeather(); // Simulate weather update
    updateWeatherUI(); // Update the UI with new weather data
    document.getElementById("message").textContent = message; // Display message
  });
