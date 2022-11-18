## Variables
#### const(상수)
- 변경이 불가능한 변수에 사용합니다.
```js
const a = 5;
const b = 2;
console.log(a);
console.log(a + b);
console.log(a * b);
console.log(a / b);
```
- console.log 는 브라우져 콘솔창에 로그를 출력합니다.

```js
const a = 5;
const b = "2";
console.log(a);
console.log(a + b);
console.log(a * b);
console.log(a / b);
```
- 문자열 2가 자동 형변환되어 숫자 또는 문자열로 표시됩니다.

```js
const a = 5;
const b = 2;
const myName = "sy";
console.log(a);
console.log(a + b);
console.log(a * b);
console.log(a / b);
```
- 자바스크립트에선 변수명을 camelCase 를 이용하여 작성합니다.

#### let
```js
let myName = "sy";

console.log("myname = " + myName);

myName = "sungyun";

console.log("myname = " + myName);
```
-let 은 변경이 가능한 변수입니다.

#### var
- const, let 이 나오기전에 사용했던 변수입니다.


## boolean
#### true, false
- 참, 거짓(0,1)
#### null, undefined
- null : 아무것도 없음, 비어있음
- undefined : 변수 할당은 되었지만 값이 없음