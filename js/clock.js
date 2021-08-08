const clock = document.querySelector("#clock h1");

function getTime() {
    const date = new Date();
    clock.innerText = date.toLocaleString();
}
getTime();
setInterval(getTime, 1000);