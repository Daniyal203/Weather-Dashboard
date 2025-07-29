
const apiKey = "f82fdd36cf88a3ea17f38577996ad4ca";

document.getElementById("getWeather").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log("Fetching weather for:", city);
  console.log("API URL:", apiUrl);

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const weatherInfo = `
    <img src="${iconUrl}" alt="Weather Icon" class="weather-icon">
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Weather:</strong> ${data.weather[0].main}</p>
    <p><strong>Description:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;

  const weatherDiv = document.getElementById("weatherDisplay");
  weatherDiv.innerHTML = weatherInfo;

  weatherDiv.style.animation = "none";
  void weatherDiv.offsetWidth;
  weatherDiv.style.animation = "fadeInUp 0.5s forwards ease-out";
})

});
