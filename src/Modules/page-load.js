import { controller, fahrenEnabled } from './controller';

const pageLoad = () => {
    // Select HTML body element
    const body = document.querySelector('body')

    // create body children elements
    const bodyElements = {
        header: document.createElement('header'),
        main: document.createElement('div'),
    }

    bodyElements.main.setAttribute('id', 'main');

    // append body children elements to body
    for (let element in bodyElements) {
        body.appendChild(bodyElements[element]);
    }

    const header = bodyElements.header;

    // create header children elements
    const headerElements = {
        logoDiv: document.createElement('div'),
        searchDiv: document.createElement('div'),
        degreesToggle: document.createElement('div')
    }

    // append header children elements
    for (let element in headerElements) {
        headerElements[element].setAttribute('id', `${element}`);
        header.appendChild(headerElements[element]);
    }

    const title = document.createElement('span');
    headerElements.logoDiv.appendChild(title);
    title.textContent = 'Weather API Demo';

    const searchBar = document.createElement('input');
    headerElements.searchDiv.appendChild(searchBar);
    searchBar.setAttribute('type', 'text');
    searchBar.setAttribute('placeholder', 'Enter City, State, or ZIP');

    const submit = document.createElement('button');
    headerElements.searchDiv.appendChild(submit);
    submit.textContent = "Search"

    // create toggle switch
    const toggleDiv = document.createElement('div');
    toggleDiv.setAttribute('id', 'toggleDiv');
    headerElements.degreesToggle.appendChild(toggleDiv);
    const fahrenheit = document.createElement('span');
    fahrenheit.textContent = "℉"
    toggleDiv.appendChild(fahrenheit);
    const toggle = document.createElement('label');
    toggle.setAttribute('class', 'switch');
    toggleDiv.appendChild(toggle);
    const toggleCheckBox = document.createElement('input');
    toggleCheckBox.setAttribute('type', 'checkbox');
    toggle.appendChild(toggleCheckBox);
    const toggleSpan = document.createElement('span');
    toggleSpan.setAttribute('class', 'slider');
    toggle.appendChild(toggleSpan);
    const celsius = document.createElement('span');
    celsius.textContent = "℃";
    toggleDiv.appendChild(celsius);

    toggleSpan.addEventListener('click', controller().switchDegrees, false);

    const main = bodyElements.main;
    const resultsDiv = document.createElement('div');
    resultsDiv.setAttribute('id', 'resultsDiv');
    main.appendChild(resultsDiv);

    const resultsElements = {
        location: document.createElement('h1'),
        temperature: document.createElement('h2'),
        description: document.createElement('span'),
        time: document.createElement('span'),
        minTemp: document.createElement('span'),
        maxTemp: document.createElement('span'),
        humidity: document.createElement('span'),

    }

    for (let element in resultsElements) {
        resultsElements[element].setAttribute('id', `${element}`);
        resultsDiv.appendChild(resultsElements[element]);
    }

    resultsElements.location.textContent = "Use the search bar to look up weather in your area";

    submit.addEventListener('click', async function() {
        console.log(searchBar.value);
        const weatherData = await controller().getWeather(searchBar.value);
        console.log(weatherData);
        
        resultsElements.location.textContent = weatherData.name;
        resultsElements.temperature.textContent = 
            controller().convertTemp(weatherData.main.temp);
        resultsElements.description.textContent = 
            weatherData.weather[0].description;
        resultsElements.time.textContent =
            controller().getDate(weatherData.dt);
        resultsElements.minTemp.textContent = 
            `Low: ${controller().convertTemp(weatherData.main.temp_min)}`;
        resultsElements.maxTemp.textContent = 
            `High: ${controller().convertTemp(weatherData.main.temp_max)}`;
        resultsElements.humidity.textContent =
            `Humidity: ${weatherData.main.humidity}%`;
        main.setAttribute('class',
            controller().getBackground(weatherData.weather[0].main));
    });
}

export { pageLoad }