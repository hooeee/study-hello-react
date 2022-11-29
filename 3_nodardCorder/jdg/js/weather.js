// whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';

const API_KEY = "1588408d0776bee62a05e6aa5b3c4063";
const WEATEHR_API = "https://api.openweathermap.org/data/2.5/weather?";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const coords = {
        lat,
        lon
    };

    localStorage.setItem("coords", JSON.stringify(coords));
    getWeather(coords);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

function getWeather(coords) {
    fetch(`${WEATEHR_API}lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C /`;
            city.innerText = data.name;
        })
}

function loadWeather() {
    const currentCoords = localStorage.getItem("coords");

    if (currentCoords !== null) {
        const parsedCoords = JSON.parse(currentCoords);
        getWeather(parsedCoords);
    }
    else {
        navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
    }
}

loadWeather();