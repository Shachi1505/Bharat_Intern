const apiKey = "d6f3d34dac1b9df21e56465184e0dc2f";
const apiUrl = " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
      var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/hr";

    if(data.weather[0].main == 'Clear'){
      weatherIcon.src="https://cdn2.iconfinder.com/data/icons/animals-nature-2/50/2600-sun-1024.png";
    }
    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "https://cdn3.iconfinder.com/data/icons/weather-150/512/weather_sky_air_atmosphere_-03-512.png ";
    }
    if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/6635/6635158.png ";
    }
    if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "https://th.bing.com/th/id/OIP._CbnFlIgf3DbHYsUXUjBYgHaHa?rs=1&pid=ImgDetMain ";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
