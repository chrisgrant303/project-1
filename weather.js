// This is our API key
var weatherAPIKey = "cf49359bd70439b6a000e6a428e3e7fc";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Chicago,Illinois&units=imperial&appid=" + weatherAPIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
})
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".clouds").html("Clouds: " + response.weather[0].description);
        $(".temp").html("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Clouds: " + response.weather[0].description);
        console.log("Temperature (F): " + response.main.temp);
    });