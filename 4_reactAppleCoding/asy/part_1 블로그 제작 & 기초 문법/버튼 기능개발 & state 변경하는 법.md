## onClick
- 요소를 클릭할 때 실행될 함수 정의
```js
function 함수(){
console.log("CLICK");
}
<div className="list">
<h4>{글제목[0]} <span onClick={ 함수 }>👍</span>{ 따봉 }</h4>
<p>2월 17일 발행</p>
</div>
```

## state 변경 하는 법
- state 는 `=` 로 변경 할 수 없음
- 변경 함수를 별도로 사용해야 재렌더링이 작동함
```js
let [따봉, 따봉변경] = useState(0);

<div className="list">
    <h4>{글제목[0]} <span onClick={ () => {따봉변경(1)} }>👍</span>{ 따봉 }</h4>
    <p>2월 17일 발행</p>
</div>
```