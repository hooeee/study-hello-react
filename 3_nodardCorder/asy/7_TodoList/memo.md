## parameter event
- 파라메터 이벤트는 여러 이벤트 정보를 가져옴
- 대상 요소 정보 등등
```js
function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}
```

## JSON.stringify
- object, array 등을 string 으로 변경
```js
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}
```

## foreach
- array length 만큼 반복
```js
function sayHello(item){
    console.log("this is turn off item ", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
}
```

## filter
- 주어진 함수가 true 로 반환되는 요소만 반환합니다.
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
