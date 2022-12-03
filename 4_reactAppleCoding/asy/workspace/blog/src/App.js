import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, b] = useState([
                              '남자 코드 추천', '강남 우동 맛집', '파이썬 독학'
                            ]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {
        글제목.map((title) => (
          <div className="list">
            <h4>{ title }</h4>
            <p>2월 17일 발행</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
