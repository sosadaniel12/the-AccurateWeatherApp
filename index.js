var enterCity = document.querySelector("#cities");
var button = document.querySelector("#submitButton");
var cityName = document.querySelector(".displayName");
var weather = document.querySelector(".displayWeather");
var desc = document.querySelector(".displayDesc");
var longtitude = document.querySelector(".longitude");
var latitdue = document.querySelector(".latitude");

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
      console.log(getLong);
      return getLatitdue;
    })
    .catch((error) => console.log(error));
});

console.log(getLatitdue);
