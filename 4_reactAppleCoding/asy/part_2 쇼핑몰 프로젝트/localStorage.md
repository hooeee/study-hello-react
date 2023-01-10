## localStorage

- 5MB 정도 문자 데이터를 저장할 수 있음
- Object 자료랑 비슷하게 key/value 형태로 저장
- 반 영구적으로 남아있음

#### localStorage 사용

```js
localStorage.setItem("age", "20");
localStorage.getItem("age");
localStorage.removeItem("age");

let obj = { name: "kim" };

localStorage.setItem("data", JSON.stringify(obj));

let storageValue = localStorage.getItem("data");

console.log(JSON.parse(storageValue).name);
```

## sessionStorage

- localStorage 와 동일하지만 브라우저를 끄면 삭제됨
