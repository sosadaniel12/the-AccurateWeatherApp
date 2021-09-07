var enterCity = document.querySelector("#cities");
var button = document.querySelector("#submitButton");
var cityName = document.querySelector(".displayName");
var weather = document.querySelector(".displayWeather");
var date = document.querySelector(".displayDate");
var longtitude = document.querySelector(".longitude");
var latitdue = document.querySelector(".latitude");
var temperature = document.querySelector(".temperature");

var key = "1fe453e20e18fc07ec52f3bfdc6679a9";
var apiKey = "&appid=1fe453e20e18fc07ec52f3bfdc6679a9";
var getLatitdue;
var getLong;

button.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      enterCity.value +
      apiKey
  )
    .then((response) => response.json())

    .then((data) => {
      console.log(data);
      var nameValue = data.city["name"];
      console.log(nameValue);

      var getLatitdue = data.city.coord.lat;
      console.log(getLatitdue);
      var getLong = data.city.coord.lon;

      var getName = data.city.name;
      cityName.innerHTML = getName;

      var getDate = data.list[0].dt_txt;
      date.innerHTML = getDate;

      var getWeather = data.list[0].weather[0].icon;
      weather.innerHTML = getWeather;

      var getTemperature = data.list[0].main.temp;
      temperature.innerHTML = getTemperature;

      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${getLatitdue}&lon=${getLong}&appid=${key}`
      )
        .then((response) => response.json())
        .then((info) => {
          console.log(info);
        });

      console.log(getLong);
    })
    .catch((error) => console.log(error));
});
