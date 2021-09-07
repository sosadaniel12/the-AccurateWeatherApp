var enterCity = document.querySelector("#cities");
var button = document.querySelector("#submitButton");
var cityName = document.querySelector("#cities");

var apiKey = "&appid=1fe453e20e18fc07ec52f3bfdc6679a9";

button.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      enterCity.value +
      apiKey
  )
    .then((response) => response.json())

    .then((data) => console.log(data))

    .catch((error) => console.log(error));
});

// fetch(url + apiKey, {
//   method: "GET",
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     for (var i = 0; i < data.length; i++) {
//       console.log(data);
//     }
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// fetch(url + apiKey, {
//   method: "GET",
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     for (var i = 0; i < data.length; i++) {
//       console.log(data.temp);
//     }
//     console.log(data.list.weather);
//     document.innerHTML = data;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// fetch("http://api.openweathermap.org/geo/1.0/direct?q=&appid=" + apiKey, {
//   method: "GET",
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     for (var i = 0; i < data.length; i++) {}
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//when user adds a city find the city in API
// S
