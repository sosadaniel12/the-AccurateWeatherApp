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

    .then((next) => {
      var allCards = document.querySelector(".allCards");
      allCards.style.background = "blue";

      var nextDate = document.querySelector("#nextDate");
      console.log(next);

      var nextDT = next.list[8].dt_txt;
      nextDT = moment().add(1, "days").format("L");
      nextDate.innerHTML = nextDT;

      var nextIcon = document.querySelector("#nextIcon");
      var nxtIcon = next.list[8].weather[0].icon;
      nextIcon.innerHTML = nxtIcon;
      nextIcon.innerHTML = `<img src = http://openweathermap.org/img/wn/${nxtIcon}.png> </img>`;

      var nextTemp = document.querySelector("#nextTemp");
      var nxtTemp = "Temperature: " + next.list[8].main.temp + "\u00B0F";
      nextTemp.innerHTML = nxtTemp;

      var nextWind = document.querySelector("#nextWind");
      var nxtWind = "Wind Speed: " + next.list[8].wind.speed + "mph";
      nextWind.innerHTML = nxtWind;

      var nextHumdity = document.querySelector("#nextHumdity");
      var nxtHumdity = "Humidty: " + next.list[0].main.humidity + "%";
      nextHumdity.innerHTML = nxtHumdity;

      var date2 = document.querySelector("#date2");
      var getDate2 = next.list[16].dt_txt;
      getDate2 = moment().add(2, "days").format("L");
      date2.innerHTML = getDate2;

      var icon2 = document.querySelector("#icon2");
      var getIcon2 = next.list[16].weather[0].icon;
      icon2.innerHTML = getIcon2;
      icon2.innerHTML = `<img src = http://openweathermap.org/img/wn/${getIcon2}.png> </img>`;

      var temp2 = document.querySelector("#temp2");
      var getTemp2 = "Temperature: " + next.list[16].main.temp + "\u00B0F";
      temp2.innerHTML = getTemp2;

      var wind2 = document.querySelector("#wind2");
      var getWind2 = "Wind Speed: " + next.list[16].wind.speed + "mph";
      wind2.innerHTML = getWind2;

      var humdity2 = document.querySelector("#humdity2");
      var getHumdity2 = "Humidty: " + next.list[16].main.humidity + "%";
      humdity2.innerHTML = getHumdity2;

      var date3 = document.querySelector("#date3");
      var getDate3 = next.list[24].dt_txt;
      getDate3 = moment().add(3, "days").format("L");
      date3.innerHTML = getDate3;

      var icon3 = document.querySelector("#icon3");
      var getIcon3 = next.list[24].weather[0].icon;
      icon3.innerHTML = getIcon3;
      icon3.innerHTML = `<img src = http://openweathermap.org/img/wn/${getIcon3}.png> </img>`;

      var temp3 = document.querySelector("#temp3");
      var getTemp3 = "Temperature: " + next.list[24].main.temp + "\u00B0F";
      temp3.innerHTML = getTemp3;

      var wind3 = document.querySelector("#wind3");
      var getWind3 = "Wind Speed: " + next.list[24].wind.speed + "mph";
      wind3.innerHTML = getWind3;

      var humdity3 = document.querySelector("#humdity3");
      var getHumdity3 = "Humidty: " + next.list[24].main.humidity + "%";
      humdity3.innerHTML = getHumdity3;

      var date4 = document.querySelector("#date4");
      var getDate4 = next.list[32].dt_txt;
      getDate4 = moment().add(4, "days").format("L");
      date4.innerHTML = getDate4;

      var icon4 = document.querySelector("#icon4");
      var getIcon4 = next.list[32].weather[0].icon;
      icon4.innerHTML = getIcon4;
      icon4.innerHTML = `<img src = http://openweathermap.org/img/wn/${getIcon4}.png> </img>`;

      var temp4 = document.querySelector("#temp4");
      var getTemp4 = "Temperature: " + next.list[32].main.temp + "\u00B0F";
      temp4.innerHTML = getTemp4;

      var wind4 = document.querySelector("#wind4");
      var getWind4 = "Wind Speed: " + next.list[32].wind.speed + "mph";
      wind4.innerHTML = getWind4;

      var humdity4 = document.querySelector("#humdity4");
      var getHumdity4 = "Humidty: " + next.list[32].main.humidity + "%";
      humdity4.innerHTML = getHumdity4;

      var date5 = document.querySelector("#date5");
      var getDate5 = next.list[38].dt_txt;
      getDate5 = moment().add(5, "days").format("L");
      date5.innerHTML = getDate5;

      var icon5 = document.querySelector("#icon5");
      var getIcon5 = next.list[38].weather[0].icon;
      icon5.innerHTML = getIcon5;
      icon5.innerHTML = `<img src = http://openweathermap.org/img/wn/${getIcon5}.png> </img>`;

      var temp5 = document.querySelector("#temp5");
      var getTemp5 = "Temperature: " + next.list[38].main.temp + "\u00B0F";
      temp5.innerHTML = getTemp5;

      var wind5 = document.querySelector("#wind5");
      var getWind5 = "Wind Speed: " + next.list[38].wind.speed + "mph";
      wind5.innerHTML = getWind5;

      var humdity5 = document.querySelector("#humdity5");
      var getHumdity5 = "Humidty: " + next.list[38].main.humidity + "%";
      humdity5.innerHTML = getHumdity5;
    })

    .catch((error) => console.log(error));
});
