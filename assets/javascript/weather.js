var weatherAPIKey = "cf49359bd70439b6a000e6a428e3e7fc";

var weatherURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Chicago,Illinois&units=imperial&appid=" + weatherAPIKey;

var weatherID;
var tempID;

var timeDiv = $('#time');
var time = moment().format("hh:mm");
var hour = parseInt(moment().format("HH"));
timeDiv.text("Time: " + time);

$("#weather").on("click", function () {
    alert("Weather code: " + weatherID)
});

$.ajax({
    url: weatherURL,
    method: "GET"
})
    .then(function (weatherResponse) {

        var city = weatherResponse.name

        console.log(weatherResponse);

        $("#cityNameAPI").html(weatherResponse.name + " Weather");
        $("#weatherAPI").html(weatherResponse.weather[0].description);
        $("#iconAPI").html("<img src='http://openweathermap.org/img/w/" + weatherResponse.weather[0].icon + ".png'>");
        $("#tempAPI").html(Math.round(weatherResponse.main.temp) + " ℉");


        //*IMPORTANT: BELOW IS THE ID (CODE/NUMER) THAT SPECIFIES THE WEATHER CONDITIONS. THIS WILL NOT BE DISPLAYED IN THE HTML*/

        weatherID = weatherResponse.weather[0].id;
        tempID = weatherResponse.main.temp;

        if (weatherID === 800) {
            weather = "clear";
        }
        else if (weatherID === 801 || weatherID === 802 || weatherID === 803) {
            weather = "partly cloudy";
        }
        else if (weatherID === 804) {
            weather = "cloudy";
        }
        else if (weatherID >= 700 && weatherID <= 781) {
            weather = "hazy";
        }
        else if (weatherID >= 600 && weatherID <= 621) {
            weather = "snowy";
        }
        else if (weatherID >= 500 && weatherID <= 531) {
            weather = "raining";
        }
        else if (weatherID >= 300 && weatherID <= 321) {
            weather = "drizzling";
        }
        else if (weatherID >= 200 && weatherID <= 232) {
            weather = "thunderstorms";
        }
        else {
            weather = "error";
        }

        if (tempID >= 72 && tempID <= 80) {
            temperature = "hot";

        } else if (tempID >= 81 && tempID <= 110) {
            temperature = "very hot";

        } else if (tempID >= 58 && tempID <= 71) {
            temperature = "mild";

        } else if (tempID >= 48 && tempID <= 57) {
            temperature = "cool"

        } else if (tempID >= 0 && tempID <= 47) {
            temperature = "cold"

        }
        if (hour >= 00 && hour < 06) {
            timeOfDay = "early morning";
        }
        else if (hour >= 06 && hour < 12) {
            timeOfDay = "morning";
        }
        else if (hour >= 12 && hour < 16) {
            timeOfDay = "afternoon";
        }
        else if (hour >= 16 && hour < 19) {
            timeOfDay = "evening";
        }
        else {
            timeOfDay = "night";
        }

        console.log(timeOfDay);
        console.log(weather);
        console.log(temperature);

    });

setTimeout(function dayTime() {

    if (timeOfDay === "morning" || timeOfDay === "afternoon" || timeOfDay === "evening") {
        console.log("execute daytime playlist")
    }
    else {
        console.log("it's night time!")
    }

}, 500);

setTimeout(function nightTime() {

    if (timeOfDay === "night" || timeOfDay === "early morning") {
        console.log("execute night time playlist")
    }
    else {
        console.log("its")
    }
}

}, 500);



