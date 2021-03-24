
const apiKey = "66d4b6288d87d0f8fe671b63d5ffa59d";
const userLocation = document.getElementById("location");
const submitBttn = document.getElementById("submit");

let weatherData;

async function getWeather(location) {
    try {
        const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {mode: 'cors'})
        const data = await response.json();
        weatherData = data;
        console.log(data);
    }
    catch(err) {
        console.log(err);
    }
}

function kelvinToCelcius(temp) {
    return Math.round(temp - 273);
}

function celciusToFahrenheit(temp) {
    let fahr = (temp * 9/5) + 32;
    return Math.round(fahr);
}

submitBttn.addEventListener("click", function() {
    getWeather(userLocation.value);
});

