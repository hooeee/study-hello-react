## state
- 잠시 정보를 저장할 수 있음
- let [a, b] 형태로 저장
  - a는 state에 보관했던 자료
  - state 변경을 도와주는 함수

```js
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, b] = useState('남자 코드 추천');
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>{ a }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
```
#### 변수와 state 차이
- 변수로 데이터 바인딩되어있으면 변수가 갑자기 변경되면 html 이 자동으로 변경되지 않음
- state 는 변경되면 자동으로 html 재 렌더링

## Destructuring 문법
- array 안에 있는 자료를 각각 a,c 변수로 사용
```js
let [a,c] = [1,2];
``` 