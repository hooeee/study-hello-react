---
title: #7 [2021 UPDATE] TO DO LIST
date: 2022-11-24 22:16:00 +0900
category: JS
draft: false
---

## 2022-11-24-#7-[2021 UPDATE]-TO-DO-LIST

## 목차

## 7.0 Setup

- html

  ```html
  <form id = "todo-form">
    <input type="text" placeholder = "Write a To Do and Press Enter" required/>
  </form>
  <ul id = "todo-list"></ul>
  ```

- todo.js 생성

  ```js
  const toDoForm = document.getElementById("todo-form");
  const toDoInput = toDoForm.querySelector("#todo-form input");
  const toDoList = document.getElementById("todo-list");
  
  
  function handleToDoSubmit(event){
  	event.preventDefault();
    const newTodo =toDoInput.value;
    toDolist.value="";
  }
  
  toDoForm.addEventListener("submit", handle.ToDoSubmit);
  
  ```

## 7.1 Adding ToDos

```js
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
	event.preventDefault();
  const newTodo =toDoInput.value;
  toDolist.value="";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handle.ToDoSubmit);
```

- 우리가 이전에 이미지태그 생성했던것 처럼 구현함
  - 구현을 완료하면 추가는 되지만 아직 안되는 기능이 있음
  - 삭제와 새로고침이되더라도 항목이 유지가 안되는 것
  - 이 부분의 경우 이전에 로그인에서 썼던 방식을 이용할것으로 예상됨

## 7.2 Deleting To Dos

```js
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
	/*console.log(event.target.parentElement.innerText);*/
	const li = event.target.parentElement;
  li.remove();
}
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌"
  vutton.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
	event.preventDefault();
  const newTodo =toDoInput.value;
  toDolist.value="";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handle.ToDoSubmit);
```

- 버튼의 해당 위치 찾기

  ```js
  function deleteToDo(event){
  	console.log(event.target.parentElement.innerText);
  }
  // event에서 접근하지만 많은 정보는 안줌
  // target까지 가는 경우 클릭된 HTML element를 볼 수 있음
  // parentElement는 클릭된 element의 부모
  ```

  - 이를 통해서 찾을 수 있음

## 7.3 Saving To Dos

```js
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [ ];

function saveToDos(){
 localStorage.setItem("todos", JSON.stringify(toDos);
}

function deleteToDo(event){
	/*console.log(event.target.parentElement.innerText);*/
	const li = event.target.parentElement;
  li.remove();
}
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌"
  vutton.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
	event.preventDefault();
  const newTodo =toDoInput.value;
  toDolist.value="";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handle.ToDoSubmit);
```

- object를 string으로 바꾸기

  ```js
  const player = {name:"3dpit"}
  JSON.stringify(player)
  
  // 완성된 것
  localStorage.setItem("todos", JSON.stringify(toDos));
  ```

## 7.4 Loading To Dos part One

```js
//["a","b","c"]
localStorage.getItem("todos"); //"[\"a\",\"b\",\"c\"]"
JSON.parse(localStorage.getItem("todos"))
```

- js

  ```js
  const toDoForm = document.getElementById("todo-form");
  const toDoInput = toDoForm.querySelector("#todo-form input");
  const toDoList = document.getElementById("todo-list");
  
  const TODOS_KEY = "todos"
  
  const toDos = [ ];
  
  function saveToDos(){
   localStorage.setItem("TODOS_KEY", JSON.stringify(toDos);
  }
  
  function deleteToDo(event){
  	/*console.log(event.target.parentElement.innerText);*/
  	const li = event.target.parentElement;
    li.remove();
  }
  function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    vutton.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }
  
  function handleToDoSubmit(event){
  	event.preventDefault();
    const newTodo =toDoInput.value;
    toDolist.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos(newTodo);
  }
  
  toDoForm.addEventListener("submit", handle.ToDoSubmit);
  
  function sayHello(item){
  	console.log("this is the turn of ",item);
  }
  
  const savedToDos = localStorage.getItem(TODOS_KEY);
  console.log(savedToDos)
  if(savedToDos !== null){
  	const parsedToDos = JSON.parse(savedToDos); //문자열로 변환 한 것
    parsedToDos.forEach((itme) => console.log("this is the turn of",itme));
  }
  ```

  - 여기서 핵심은 function을 따로 쓰지 않더라도

    - 아래와 같이해도 같은 결과임을 나타냄

      ```js
      /*function*/
      function sayHello(item){
      	console.log("this is the turn of ",item);
      }
      parsedToDos.forEach(ayHello(""));
      
      /*function 합친경우*/
      parsedToDos.forEach((itme) => console.log("this is the turn of",itme));
      ```

##  7.5 Loading To Dos part Two

```js
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [ ];

function saveToDos(){
 localStorage.setItem("TODOS_KEY", JSON.stringify(toDos);
}

function deleteToDo(event){
	/*console.log(event.target.parentElement.innerText);*/
	const li = event.target.parentElement;
  li.remove();
}
function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌"
  vutton.addEventListener("click",deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
	event.preventDefault();
  const newTodo =toDoInput.value;
  toDolist.value="";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos(newTodo);
}

toDoForm.addEventListener("submit", handle.ToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)
if(savedToDos !== null){
	const parsedToDos = JSON.parse(savedToDos); //문자열로 변환 한 것
  parsedToDos.forEach((paintToDo());
}
```

- 이렇게 하면 저장은 되지만 문제가 있음
  - 우선 새로 입력하기전은 그대로 데이터가 남아있지만
  - 새로입력을 하면 그데이터만 남고 이전 데이터는 사라진다는 것
    - 그렇게 되는 이유는 현재 우리가 쓰는 `const toDos = [ ];`
      - 이것이 항상 비어있기 때문이다.

- 개선한 코드

  ```js
  const toDoForm = document.getElementById("todo-form");
  const toDoInput = toDoForm.querySelector("#todo-form input");
  const toDoList = document.getElementById("todo-list");
  
  const TODOS_KEY = "todos"
  
  let toDos = [ ];
  
  function saveToDos(){
   localStorage.setItem("TODOS_KEY", JSON.stringify(toDos);
  }
  
  function deleteToDo(event){
  	/*console.log(event.target.parentElement.innerText);*/
  	const li = event.target.parentElement;
    li.remove();
  }
  function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌"
    vutton.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }
  
  function handleToDoSubmit(event){
  	event.preventDefault();
    const newTodo =toDoInput.value;
    toDolist.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos(newTodo);
  }
  
  toDoForm.addEventListener("submit", handle.ToDoSubmit);
  
  const savedToDos = localStorage.getItem(TODOS_KEY);
  console.log(savedToDos)
  if(savedToDos !== null){
  	const parsedToDos = JSON.parse(savedToDos); //문자열로 변환 한 것
    toDos = parsedToDos;
    parsedToDos.forEach((paintToDo());
  }
  ```

  

