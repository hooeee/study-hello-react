## math
```js
Math.random(); // 0-1 사이의 랜덤 숫자
Math.round(1.5); // 반올림
Math.ceil(1.5); // 올림
Math.floor(1.5); // 내림
```

## createElement
- Element 를 생성

```js
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
```

## appendChild, prepend
- js 에서 생성한 Html 요소를 추가

```js
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
```
