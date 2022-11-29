const toDoform = document.getElementById("todo-form");
const toDoInput = toDoform.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos"
let toDos = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveTodo();
}



function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;

    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
};

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    //toDos.push(newTodo);
    newTodoObj = {
        id: Date.now(),
        text:newTodo
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

toDoform.addEventListener("submit", handleToDoSubmit);


const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    toDos.forEach((item) => paintTodo(item));
};

