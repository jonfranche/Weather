const controller = () => {
    const apiKey = '66d4b6288d87d0f8fe671b63d5ffa59d';
    async function getWeather(location) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
                {mode: 'cors'});

            const weatherData = await response.json();
            //console.log(weatherData);
            //console.log(`name = ${weatherData.name}` );

            return weatherData;
        }
        catch {
            console.log('unable to get weather info for your location');
        }
    }

    function convertTemp (temp) {
        if (fahrenEnabled) {
            temp = ((temp - 273.15) * (9 / 5) + 32);
            console.log(parseInt(temp, 10) + " ℉");
            return parseInt(temp, 10) + " ℉";
        } else {
            temp = temp - 273.15
            console.log(parseInt(temp, 10) + " ℃");
            return parseInt(temp, 10) + " ℃";
        }
    }

    function switchDegrees (){
        // console.log("switchDegrees called");
        
        if (fahrenEnabled) {
            console.log('false');
            fahrenEnabled = false;
        } else {
            console.log('true');
            fahrenEnabled = true;
        }
    }

    function getDate (time) {
        // convert Unix time stamp to milliseconds for Date object
        time = time * 1000
        const dateObject = new Date(time);

        return dateObject.toLocaleString('en-US', {timeZoneName: 'short'});
    }

    function getBackground (main) {
        console.log(main);
        switch (main) {
            case 'Clear':
                return 'clear';
                break;
            case 'Clouds':
                return 'clouds';
                break;
            case 'Rain':
                return 'rain';
                break;
            case 'Snow':
                return 'snow';
                break;
            case 'Thunderstorm':
                return 'thunder';
                break;
            case 'Drizzle':
                return 'rain';
                break;
            case 'Fog':
                return 'fog';
                break;
            case 'Mist':
                return 'mist';
                break;
            case 'Haze':
                return 'haze';
                break;
            default:
                return 'none';
        }
    }

    return {
        getWeather,
        convertTemp,
        switchDegrees,
        getDate,
        getBackground
    }
}

let fahrenEnabled = true;

export { controller, fahrenEnabled }