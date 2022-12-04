/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   let [blogTitles, titleChanged] = useState(['남자 코트 추천', '강남 우동 맛집', '수원 맛집 추천']);
   let [logo, setLogo] = useState('BeomBeomJoJo');
   let [따봉, 따봉변경] = useState(0);

   return (
      <div className="App">
         <div className="black-nav">
            <h4>{logo}</h4>
         </div>
         <button
            onClick={() => {
               let copy = [...blogTitles].sort();
               titleChanged(copy);
            }}>
            가나다순정렬
         </button>
         <button
            onClick={() => {
               let copy = [...blogTitles];
               copy[0] = '여자 코트 추천';
               titleChanged(copy);
            }}>
            타이틀 변경
         </button>
         <div className="list">
            <h4>
               {blogTitles[0]}{' '}
               <span
                  onClick={() => {
                     따봉변경();
                  }}>
                  👍
               </span>{' '}
               {따봉}
            </h4>
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
