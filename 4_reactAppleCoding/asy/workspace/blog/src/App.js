/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
  let [board, changeBoard] = useState([
    {
      title : '남자 코트 추천',
      likeCount : 0,
    },
    {
      title : '강남 우동 맛집',
      likeCount : 0
    },
    {
      title : '파이썬 독학',
      likeCount : 0
    }
  ])

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...board];
        copy[0].title = '여자 코트 추천';
        changeBoard(copy);
      }}>글 수정
      </button>
      {
        board.map(function(a, i){
          return (      
          <div className="list" key={i}>
            <h4 onClick={() => { modal == true ? setModal(false) : setModal(true); setTitle(i)}}>
              { board[i].title } 
              <span onClick={()=>{
                let copyboard = [...board];
                copyboard[i].likeCount += 1;
                changeBoard(board);
                }}>👍</span>{ board[i].likeCount }
            </h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }
      {
        modal == true ? <Modal board={board} title={title}/> : null
      }
    </div>
  );
}

// 컴포넌트 
function Modal(props){
    return (
        <div className='modal'>
          <h4>{props.board[props.title].title}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button>글수정</button>
        </div>
    )
}

export default App;
