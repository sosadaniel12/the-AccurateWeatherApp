var apiKey = "1fe453e20e18fc07ec52f3bfdc6679a9";

fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hour,daily&appid=" +
    apiKey,
  {
    method: "GET",
  }
)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
