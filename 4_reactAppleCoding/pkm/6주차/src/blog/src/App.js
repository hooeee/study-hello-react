import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [blogTitle, setLogo] = useState('React Blog');
  const [subTitle, setSubTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학']);
  const [modal, setModal] = useState(false);
  const [like, likeChange] = useState([0, 0, 0]);
  const [title, setTitle] = useState(0);
  const [inputValue, setInputValue]=useState('');

  const InputButtonHandle = (e) =>{
    let copySubTitle = [...subTitle,e];
    setSubTitle(copySubTitle);
  }

  const DeleteButtonHandle = (e) =>{
    console.log(e);
    let copySubTitle = [...subTitle];
    subTitle.map(function(obj,index){
      if(e==obj){
        delete(copySubTitle[index]);
      }
    })
    setSubTitle(copySubTitle);
  }


  function changeWrite() {
    let copyTitle = [...subTitle];
    copyTitle[0] = '여자코트 추천';
    setSubTitle(copyTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{blogTitle}</h4>
        <span onClick={() => {
          let copyTitle = [...subTitle];
          copyTitle[0] = '여자코트 추천';
          setSubTitle(copyTitle);
        }
        }>🔁</span>
        <button onClick={() => {
          let copy = [...subTitle]
          copy.sort();
          setSubTitle(copy);
        }}>
          가나다라마다사  정렬
        </button>
      </div>
      {
        subTitle.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setTitle(i) }}>{subTitle[i]}
              <span onClick={(e) => {
                e.stopPropagation();
                let copyLike = [...like];
                copyLike[i] = copyLike[i] + 1;
                likeChange(copyLike)
              }}>❤️</span>{like[i]}<button onClick={()=>{DeleteButtonHandle(a)}}>X</button></h4>
              <p>12월 04일 발행</p>
            </div>
          )
        })
      }
      <div>
        <input onChange={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
          console.log(inputValue);
        }} /> <button onClick={()=>{InputButtonHandle(inputValue)}}>블로그 글 추가하기</button>
      </div>
      {
        modal == true ? <Modal title={title} color={'skyblue'} subTitle={subTitle} /> : null
      }
    </div>
  );
}


function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.subTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  )
}
export default App;