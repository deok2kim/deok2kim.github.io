const formLogin = document.querySelector("#form-login");
const inputUsername = document.querySelector("#input-username");
const todo = document.querySelector("#todo");

const USERNAME = "username";

function saveUsername(username){
    localStorage.setItem(USERNAME, username);
    paintUsername();
}

function paintUsername(username){
    document.querySelector("#username").innerText = `Hello, ${username}`;
    inputUsername.remove();
    todo.style.display = 'block'
    document.querySelector("#login h1").style.display = "none";
    
}

function onLoginSubmit(e) {
    e.preventDefault();
    const newUsername = inputUsername.value;
    saveUsername(newUsername);
    paintUsername(newUsername);
}

formLogin.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME);
if(savedUsername) {
    paintUsername(savedUsername);
} else {
    todo.style.display = 'none';
}