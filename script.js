function weatherTimeUpdate() {

    cityName = document.getElementById("name").value;

    if (cityName == "") {
      cityName = "Delhi";
    }

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=d4da201ba51c4eeeaa4abec6478c786d"
  )
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData.weather[0].main);
      document.getElementById("temperature").innerHTML = responseData.main.temp + " °C";
      document.getElementById("city-name").innerHTML = (responseData.name).toUpperCase();
      document.getElementById("max-temp").innerHTML = responseData.main.temp_max + " °C";
      document.getElementById("wind-speed").innerHTML = responseData.wind.speed + " m/s";
      document.getElementById("humidity-info").innerHTML = responseData.main.humidity + " m/s";
      document.getElementById("condition").innerHTML = responseData.weather[0].description.toUpperCase();
      graphicsUpdate(responseData.weather[0].description.toUpperCase());
    });
}

function graphicsUpdate(description){
    if (description == "CLEAR SKY") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163662.svg" alt="sun" width=70px>';
    } else if (description == "FEW CLOUDS") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163661.svg" alt="clouds" width=70px>';
    } else if (description == "SCATTERED CLOUDS") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163624.svg" alt="clouds" width=70px>';
    } else if (description == "BROKEN CLOUDS") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163634.svg" alt="clouds" width=70px>';
    } else if (description == "SHOWER RAIN") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163626.svg" alt="clouds" width=70px>';
    } else if (description == "LIGHT RAIN") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163626.svg" alt="clouds" width=70px>';
    }else if (description == "RAIN") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163627.svg" alt="clouds" width=70px>'; 
    } else if (description == "THUNDERSTORM") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163636.svg" alt="clouds" width=70px>';
    } else if (description == "SNOW") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163636.svg" alt="clouds" width=70px>';
    } else if (description == "MIST") {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163673.svg" alt="clouds" width=70px>';
    } else {
      document.getElementById("image").innerHTML =
        '<img src="https://www.flaticon.com/svg/static/icons/svg/1163/1163633.svg" alt="clouds" width=70px>';
    }

}


document.getElementById("name").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    weatherTimeUpdate();
  }
}); 
