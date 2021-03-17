
const apiKey = "66d4b6288d87d0f8fe671b63d5ffa59d";
const userLocation = document.getElementById("location");
const submitBttn = document.getElementById("submit");

async function getWeather(location) {
    fetch(`https:api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response)
        });
}

submitBttn.addEventListener('click', function() {
    getWeather(`${userLocation.value}`);
});