## JSX
- JS 안에서 html 을 쉽게 작성하도록 해주는 언어
```js
function App() {
  return (
    <div className="App">
      <div></div>
    </div>
  );
}
```
#### Class
- dom 를 class -> className 로 작성
- class 는 js class 와 혼동될 수 있으므로 className 으로 작성

#### 중괄호
- 변수 넣을 때 {변수} 로 작성 가능
- id, class 등 여러 요소에 작성 가능
```js
function App() {
  let post = '강남 우동 맛집';
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}
```

#### style
- jsx 안에서 style 에 style 속성을 지정할 수 있음
- style = {{스타일명 : '값'}} 형태로 작성
- 속성 중 `-` 이 포함되어있는 속성이면 camelCase 문법으로 변경해서 작성해야함
```js
function App() {
  let post = '강남 우동 맛집';
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={
                    {color : 'red', fontSize : '16px'}
                  }>블로그임</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}
```