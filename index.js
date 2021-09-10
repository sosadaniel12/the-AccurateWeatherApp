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
var history = [];

function displayWeatherBox() {
  var weatherBox = document.querySelector(".weatherBox");
  weatherBox.style.display = "block";
}

function setCoordinates(lat, lon) {
  getLatitdue = lat;
  console.log(getLatitdue);
  getLong = lon;
}

button.addEventListener("click", megaFunction);
function megaFunction(e, savedSearch) {
  var searchVal = enterCity.value;
  e.preventDefault();
  if (savedSearch) {
    searchVal = savedSearch;
  }
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&q=" +
      searchVal +
      apiKey
  )
    .then((response) => response.json())

    .then((data) => {
      displayWeatherBox();
      console.log(data);
      var nameValue = data.city["name"];
      console.log(nameValue);
      setCoordinates(data.city.coord.lat, data.city.coord.lon);

      var getName = data.city.name;
      cityName.innerHTML = getName;

      var searchHistory = document.querySelector("#searchHistory");
      var historyDiv = document.createElement("div");
      historyDiv.className = "list-group";

      var historyBtn = document.createElement("button");
      historyBtn.addEventListener("click", function (event) {
        megaFunction(event, event.target.textContent);
      });
      historyBtn.textContent = getName;
      historyBtn.className = "savedHistory";
      historyDiv.appendChild(historyBtn);
      searchHistory.appendChild(historyDiv);

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
          var getUvIndex = info.current.uvi;
          uvIndex.innerHTML = getUvIndex + "UV";
          console.log(info);
          function updateUvStyle(color) {
            uvIndex.style.background = color;
            uvIndex.style.width = "25%";
            uvIndex.style.borderRadius = "5px";
          }
          function checkUV() {
            if (getUvIndex > 7) {
              updateUvStyle("red");
            } else if (getUvIndex <= 7 && getUvIndex >= 5) {
              updateUvStyle("yelllow");
            } else if (getUvIndex < 5) {
              updateUvStyle("green");
            }
          }
          checkUV();
        });

      console.log(getLong);
    });
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&q=" +
      searchVal +
      apiKey
  )
    .then((response) => response.json())

    .then((next) => {
      var forecast = document.querySelector("#forecast");
      forecast.innerHTML = "<p>5 Day Forecast:<p>";
      forecast.style.background = "black";

      for (var i = 1; i < 6; i++) {
        var index = 8 * i - 1;
        var day = document.querySelector(".day" + i);
        day.style.background = "blue";
        day.style.border = "solid black 3px";

        var date = document.querySelector("#date" + i);
        var getDate = next.list[index].dt_txt;
        getDate = moment().add(i, "days").format("L");
        date.innerHTML = getDate;

        var icon = document.querySelector("#icon" + i);
        var getIcon = next.list[index].weather[0].icon;
        icon.innerHTML = getIcon;
        icon.innerHTML = `<img src = http://openweathermap.org/img/wn/${getIcon}.png> </img>`;

        var temp = document.querySelector("#temp" + i);
        var getTemp = "Temperature: " + next.list[index].main.temp + "\u00B0F";
        temp.innerHTML = getTemp;

        var wind = document.querySelector("#wind" + i);
        var getWind = "Wind Speed: " + next.list[index].wind.speed + "mph";
        wind.innerHTML = getWind;

        var humdity = document.querySelector("#humdity" + i);
        var getHumdity = "Humidty: " + next.list[index].main.humidity + "%";
        humdity.innerHTML = getHumdity;
      }

      var saveInfo = document.querySelector(".saveInfo");

      for (var i; i < saveInfo.length; i++) {
        console.log(saveInfo);
      }
    })

    .catch((error) => console.log(error));
}
