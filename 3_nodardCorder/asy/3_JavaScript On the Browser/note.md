## Searching For Elements
```js
//// Searching For Elements
const hello = document.getElementsByClassName("hello");
console.log(hello);

// const title = document.querySelector(".hello h1");
const title = document.querySelectorAll(".hello h1");
console.log(title);
```
#### getElement
- 여러 함수로 document 를 가져옴
#### querySelector
- . 나 # 같은 문자로 class, id 를 이용해 document 를 찾을 수 있음

## Events 
- https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector

#### toggle
- 토큰이 존재하면 토큰을 제거하고 존재하지 않는다면 토큰을 추가
```js
function handleTitleClick(){
    h1.classList.toggle("clicked");
}
```