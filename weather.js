
var weatherAPIKey = "cf49359bd70439b6a000e6a428e3e7fc";

var weatherURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Chicago,Illinois&units=imperial&appid=" + weatherAPIKey;

var weatherID;

var timeDiv = $('#time');
var time = moment().format("HH:mm");
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

        $(".city").html("<h1>" + weatherResponse.name + " Weather</h1>");
        $(".weather").html("Weather: " + weatherResponse.weather[0].description);
        $(".temp").html("Temperature (F) " + weatherResponse.main.temp);

        console.log("City: " + weatherResponse.name);
        console.log("Weather: " + weatherResponse.weather[0].description);
        console.log("Temperature (F): " + weatherResponse.main.temp);

        //*IMPORTANT: BELOW IS THE ID (CODE/NUMER) THAT SPECIFIES THE WEATHER CONDITIONS. THIS WILL NOT BE DISPLAYED IN THE HTML*/

        weatherID = weatherResponse.weather[0].id;

        console.log("WEATHER ID: " + weatherID)

        if (weatherID === 800) {
            console.log("it's clear outside")
        }
        else if (weatherID === 801 || weatherID === 802 || weatherID === 803) {
            console.log("it's partly cloudy")
        }
        else if (weatherID >= 700 && weatherID <= 781) {
            console.log("it is misty outside")
        }
        else if (weatherID >= 600 && weatherID <= 621) {
            console.log("it is snowing outside")
        }
        else if (weatherID >= 500 && weatherID <= 531) {
            console.log("it is raining outside")
        }
        else if (weatherID >= 300 && weatherID <= 321) {
            console.log("it is drizzling outside")
        }
        else if (weatherID >= 200 && weatherID <= 232) {
            console.log("it is heavily raining outside")
        }
        else {
            console.log("error fetching weather data")
        }

    });
console.log(hour);

if (hour >= 00 && hour < 06) {

    console.log("early morning");
}
else if (hour >= 06 && hour < 12) {
    console.log("morning");
}
else if (hour >= 12 && hour < 16) {
    console.log("afternoon");
}
else if (hour >= 16 && hour < 19) {
    console.log("evening");
}
else {
    console.log("night");
}
