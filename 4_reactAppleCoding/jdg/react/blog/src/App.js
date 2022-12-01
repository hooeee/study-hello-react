import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // document.querySelector('h4').innerHTML = post; ==> 자바스크립트 문법

  // jsx 문법1 | class 넣을 땐 : className
  // jsx 문법2 | 변수 데이터 바인딩 : {}
  // jsx 문법3 | style 넣을 땐 : style={{스타일명:'값'}} ==> object 형식으로

  let post = '강남 우동 맛집';
  let [글제목, b] = useState(
    [
      '남자 코트 추천',
      '강남 우동 맛집',
      '파이썬 독학',
    ]); // 중요한 데이터는 변수말고 satate에 담는다.

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '30px' }}>JDG 블로그</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>12월 01일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>12월 01일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>12월 01일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
