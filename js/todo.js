const formTodo = document.querySelector("#form-todo");
const inputTodo = document.querySelector("#input-todo");
const ulTodo = document.querySelector("#ul-todo")

let todos = [];

const TODOS_KEY = "todos"

function removeTodo(e){
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((item) => item.id !== parseInt(li.id));
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.className = "btn";
    btn.addEventListener("click", removeTodo);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    ulTodo.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);
    saveTodo();
}

function onTodoSubmit(e) {
    e.preventDefault();
    const newTodoObj = {
        text: inputTodo.value,
        id: Date.now()
    }
    inputTodo.value = "";
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
}

formTodo.addEventListener("submit", onTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos
    todos.forEach(paintTodo);
}


