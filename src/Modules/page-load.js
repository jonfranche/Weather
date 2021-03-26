const pageLoad = () => {
    const body = document.querySelector('body')
    body.textContent = "body";

    const bodyElements = {
        header: document.createElement('header'),
        main: document.createElement('div'),
    }

    bodyElements.main.setAttribute('class', 'main');

    for (let element in bodyElements) {
        body.appendChild(bodyElements[element]);
    }

    bodyElements.header.textContent = "header";
    bodyElements.main.textContent = "main";
}

export { pageLoad }