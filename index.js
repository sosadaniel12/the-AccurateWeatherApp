var enterCity = document.querySelector("#cities");
var button = document.querySelector("#submitButton");
var cityName = document.querySelector("#displayName");
var weather = document.querySelector("#displayWeather");
var date = document.querySelector("#displayDate");
var longtitude = document.querySelector("#longitude");
var latitdue = document.querySelector("#latitude");
var temperature = document.querySelector("#temperature");
var humdity = document.querySelector("#humdity");
var windSpeed = document.querySelector("#windSpeed");
var uvIndex = document.querySelector("#uvIndex");

var key = "1fe453e20e18fc07ec52f3bfdc6679a9";
var apiKey = "&appid=1fe453e20e18fc07ec52f3bfdc6679a9";
var getLatitdue;
var getLong;

button.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&q=" +
      enterCity.value +
      apiKey
  )
    .then((response) => response.json())

    .then((data) => {
      var weatherBox = document.querySelector(".weatherBox");
      weatherBox.style.border = "solid black 3px";

      console.log(data);
      var nameValue = data.city["name"];
      console.log(nameValue);

      var getLatitdue = data.city.coord.lat;
      console.log(getLatitdue);
      var getLong = data.city.coord.lon;

      var getName = data.city.name;
      cityName.innerHTML = getName;

      var getDate = data.list[0].dt_txt;
      getDate = moment().format("L");
      date.innerHTML = getDate;
      var getWeather = data.list[0].weather[0].icon;
      weather.innerHTML = getWeather;
      weather.innerHTML = `<img src = http://openweathermap.org/img/wn/${getWeather}.png> </img>`;

      var getTemperature = "Temperature: " + data.list[0].main.temp + "\u00B0F";
      temperature.innerHTML = getTemperature;

      var getHumdity = "Humidty: " + data.list[0].main.humidity + "%";
      humdity.innerHTML = getHumdity;

      var getWindSpeed = "Wind Speed: " + data.list[0].wind.speed + "mph";
      windSpeed.innerHTML = getWindSpeed;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${getLatitdue}&lon=${getLong}&appid=${key}`
      )
        .then((response) => response.json())
        .then((info) => {
          var getUvIndex = "UV Index: " + info.current.uvi;
          uvIndex.innerHTML = getUvIndex;
          console.log(info);
        });

      console.log(getLong);
    });
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&q=" +
      enterCity.value +
      apiKey
  )
    .then((response) => response.json())
    .then((nextDays) => {
      console.log(nextDays);
    })

    .catch((error) => console.log(error));
});
