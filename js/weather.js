const API_KEY = "2b8837a07dc25e94c656cc6796f495d8";

function onGeoOk(res) {
    const lat = res.coords.latitude;
    const lon = res.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}℃ ${data.weather[0].main}`
    });
}

function onGeoError(err) {
    console.err(err)
}
const geo = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
