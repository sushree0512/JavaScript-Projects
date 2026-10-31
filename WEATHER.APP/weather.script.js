const apiKey = "YOUR API KEY";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (!response.ok) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json(); //this data will have all the information about the weather in bangalore

    console.log(data);

    document.querySelector(".city").innerHTML = data.name; //update the city name
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C"; //update the temperature + round it to the nearest integer
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; //update the humidity
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "images/thunder.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/fog.png";
    }

    if (!response.ok) {
      console.log("Error:", data.message);
      return;
    }

    document.querySelector(".weather").style.display = "block"; //display the weather information
    document.querySelector(".error").style.display = "none"; //hide the error message
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
