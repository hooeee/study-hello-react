const todoForm =  document.querySelector('div#todos form');
const todoInput = document.querySelector('div#todos form input');
const todoBox = document.querySelector('div#todos ul');

const STORAGE_TODO_NAME_KEY = 'todoList';
const COMPLETE_TODO_CLASS_NAME_KEY = 'complate-todo';

let todos = [];

function revmoeTodo(event){
    let li = event.target.parentElement;
    li.remove();
    todos = todos.filter(t=> t.id != li.id);
    saveTodo();
}

function todoHandleClick(event){
    let span = event.target;
    let li = event.target.parentElement;
    let todo = todos.find(t=> t.id == li.id);

    if(todo.check)//UI 변경
        span.classList.remove('complate-todo');
    else 
        span.classList.add('complate-todo');

    todos = todos.map(t=> {// Array 변경
        if(t.id == li.id){
            t.check = !t.check;
        }
        return t;
    })
    saveTodo();
}

function createTodoObject(text){
    return {
        id : Date.now(),
        check : false,
        text
    }
}

function printTodo(todo){
    const li = document.createElement( 'li' );
    li.id = todo.id;

    const span = document.createElement( 'span' );
    span.addEventListener( 'click', todoHandleClick )

    if(todo.check) span.classList.add('complate-todo');


    const button = document.createElement( 'button' );
    button.innerHTML = '❌';
    button.addEventListener( 'click', revmoeTodo )


    span.innerHTML = todo.text;
    li.appendChild(span);
    li.appendChild(button);
    todoBox.appendChild(li);
}

function submitTodo(event){
    event.preventDefault();
    let value = todoInput.value;
    todoInput.value = '';
    
    let todo = createTodoObject(value);
    
    todos.push(todo);
    printTodo(todo);
    saveTodo();
}

function saveTodo(){
    localStorage.setItem( STORAGE_TODO_NAME_KEY , JSON.stringify( todos ));
}

function recoveryTodo(){
    let dbTodos = JSON.parse(localStorage.getItem( STORAGE_TODO_NAME_KEY ));
    if(dbTodos !== null){
        todos = dbTodos;
        todos.forEach(printTodo);
    }
}

todoForm.addEventListener('submit' , submitTodo);
recoveryTodo();