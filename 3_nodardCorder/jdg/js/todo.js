// whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const LINE_TODO = "line-todo";
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function lineTodo(event) {
    const li = event.target.parentElement;
    const span = event.target;
    const todo = toDos.find(f => f.id == li.id);

    if (todo.check) {
        span.classList.remove(LINE_TODO);
    }
    else {
        span.classList.add(LINE_TODO);
    }

    toDos = toDos.map(t => {
        if (t.id == li.id) {
            t.check = !t.check;
        }
        return t;
    })
    saveToDos();
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    span.addEventListener("click", lineTodo);

    const button = document.createElement("button");
    button.innerText = "❌";

    button.addEventListener("click", deleteToDo);

    if (newToDoObj.check) {
        span.classList.add(LINE_TODO);
    }

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        check: false,
    };

    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
}); */

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
