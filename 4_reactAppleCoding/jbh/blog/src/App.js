import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   let [blogTitles, b] = useState(['남자 코트 추천', '강남 우동 맛집', '수원 맛집 추천']);
   let [logo, setLogo] = useState('ReactBlog');

   return (
      <div className="App">
         <div className="black-nav">
            <h4>{logo}</h4>
         </div>
         <div className="list">
            <h4>{blogTitles[0]}</h4>
            <p>12월 03일 발행</p>
         </div>
         <div className="list">
            <h4>{blogTitles[1]}</h4>
            <p>12월 03일 발행</p>
         </div>
         <div className="list">
            <h4>{blogTitles[2]}</h4>
            <p>12월 03일 발행</p>
         </div>
      </div>
   );
}

export default App;
