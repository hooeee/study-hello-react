const API_KEY = "6c97d032d93cb8b5f17f2a850689fa7c";


function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(date => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child");

        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} ${data.main.temp}`;
    });

}

function onGeoErro(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErro);
