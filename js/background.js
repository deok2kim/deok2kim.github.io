const body = document.querySelector("body");

const randomNumber = Math.ceil(Math.random() * 5);
console.log(randomNumber);

body.style.backgroundImage = `url('img/background${randomNumber}.jpg')`;
body.style.backgroundRepeat = 'no-repeat';
body.style.backgroundSize = "100% 100%";
body.style.backgroundAttachment = "fixed"