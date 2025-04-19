const apiKey = "863242cfb2b1d357e6093d9a4d9f19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // 

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"; // 
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json(); // 

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // 🔧 Fixed typo: "waeather" → "weather"
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/image/images/cloud.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "/image/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/image/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/image/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "/image/images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "/image/images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"; // 
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});