
var weatherAPIKey = "cf49359bd70439b6a000e6a428e3e7fc";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Chicago,Illinois&units=imperial&appid=" + weatherAPIKey;

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        city = response.name

        console.log(queryURL);

        console.log(response);

        $(".city").html("<h1>" + response.name + " Weather</h1>");
        $(".clouds").html("Clouds: " + response.weather[0].description);
        $(".temp").html("Temperature (F) " + response.main.temp);

        console.log("City: " + response.name);
        console.log("Clouds: " + response.weather[0].description);
        console.log("Temperature (F): " + response.main.temp);
    });

var timeDiv = $('#time');
var time = moment().format("hh:mm:ss");
timeDiv.text("Time: " + time);