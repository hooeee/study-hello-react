function onGeoOk(positon){
    const lat = positon.coords.latitude;
    const lng = positon.coords.longitude;
    const API_KEY = "1819da45fe341a779401d941b8a344cf";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerHTML = data.name;
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("can`t find you. No weather for you")
}