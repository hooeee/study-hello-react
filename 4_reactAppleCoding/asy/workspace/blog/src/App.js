/* eslint-disable */

import "./App.css";
import { useState } from "react";

function App() {
  let [board, setBoard] = useState([
    {
      title: "남자 코트 추천",
      likeCount: 0,
      date: "2월 17일 발행"
    },
    {
      title: "강남 우동 맛집",
      likeCount: 0,
      date: "2월 17일 발행"
    },
    {
      title: "파이썬 독학",
      likeCount: 0,
      date: "2월 17일 발행"
    },
  ]);

  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');

  const handleModal = (i) => {
    modal == true ? setModal(false) : setModal(true);
    setTitle(i);
  }

  const handleChangedTitle = (i) => {
    let copy = [...board];
    if(copy[i].title == "남자 코트 추천"){
      copy[i].title = "여자 코트 추천";
    } else if (copy[i].title == "여자 코트 추천"){
      copy[i].title = "남자 코트 추천";
    }
    setBoard(copy);
  }
5
  const handleAddLikeCount = (i) => {
    setBoard(
      board.map((item, idx) => {
        if(i == idx){
          item.likeCount++;
        }
        return item;
      }) 
    )
  }

  const handleTitleSort = () => {
    setBoard([...board].sort((a,b)=> a.title.localeCompare(b.title)))
  }

  const handleInputOnChage = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  const handleInputBtn = () => {
    console.log(inputValue)
    if(inputValue === ''){
      return
    }
    const newItem = {
      title: inputValue,
      likeCount: 0,
      date: ''
    };
    setBoard([...board, newItem]);
  }

  const handleItemDelete = (i) => {
    setBoard(board.filter((item)=>item !== i));
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      
      <button onClick={handleTitleSort}>정렬</button>
      
      {board.map(function (item, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={(e) => {
                handleModal(i);
              }}>
              {item.title}
              <span onClick={(e) => {
                  e.stopPropagation();
                  handleAddLikeCount(i)
                }}>
                👍
              </span>
              {item.likeCount}
            </h4>
            <p>{item.date}</p>
            <button onClick={() => {handleChangedTitle(i)}}>글 수정</button>
            <button onClick={() => {handleItemDelete(item)}}>삭제</button>
          </div>
        );
      })}

      <input onInput={(e) => {handleInputOnChage(e)}}></input>
      <button onClick={() => {handleInputBtn()}}>버튼</button>

      {modal == true ? <Modal board={board} title={title} /> : null}
    </div>
  );
}

// 컴포넌트
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.board[props.title].title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
