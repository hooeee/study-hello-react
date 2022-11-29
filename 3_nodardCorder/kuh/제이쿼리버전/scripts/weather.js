function success(location) {
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;
  const APIKEY = "de6d3501ab1d70ad0eadbdb1f6870d2d";
  const lang = "kr";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric&lang=${lang}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = $("div#weather div:first-child");
      const city = $("div#weather div:last-child");

      weather.text(
        `${data.weather[0].description} / 현재온도 ${data.main.temp} °C`
      );
      city.text(data.name);
    });
}

function fail() {
  alert("위치 정보를 찾을 수 없습니다.");
}

let option = {
  enableHighAccuracy: true,
};

navigator.geolocation.getCurrentPosition(success, fail, option);
