
/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  return (
    <div className="App">
      <div className='black-nav'>
        <h4> ReactBlog</h4>
      </div>

      <div className='btn'>
        <button onClick={ () => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>글제목 변경</button>
      </div>파이썬독학

      <div className='list'>
        <h4 onClick={() => {setModal(true); setTitle(0);}}>{글제목[0]} 
          <span onClick={ () => { 
            let 따봉copy = [...따봉];
            따봉copy[0] += 1;
            따봉변경(따봉copy) 
             }}>👍</span> {따봉[0]} 
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {setModal(true); setTitle(1);}}>{글제목[1]} 
          <span onClick={ () => {
            let 따봉copy = [...따봉];
            따봉copy[1] += 1;
            따봉변경(따봉copy)   }}>👍</span> {따봉[1]} 
        </h4>
      </div>
      <div className='list'>
        <h4 onClick={() => {setModal(true); setTitle(2);}}>{글제목[2]} 
          <span onClick={ () => { 
            let 따봉copy = [...따봉];
            따봉copy[2] += 1;
            따봉변경(따봉copy)   }}>👍</span> {따봉[2]} 
        </h4>
        <p>2월 17일 발행</p>
      </div>
     <button onClick={() => setTitle(0)}>글제목0</button>
     <button onClick={() => setTitle(1)}>글제목1</button>
     <button onClick={() => setTitle(2)}>글제목2</button>
     {
        modal == true ? <Modal title={title} color={'yellow'} 글제목={글제목} ChangeTitle={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }} /> : null
     }
    </div>
  );
}

function Modal(props) {
  return (
      <div className='modal' style={{background: props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => {
          props.ChangeTitle();
        }}>글수정</button>
      </div>
  );
}

export default App;
