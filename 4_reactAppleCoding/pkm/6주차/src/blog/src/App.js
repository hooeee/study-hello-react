import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [blogTitle, setLogo] = useState('React Blog');
  // const [subTitle, setSubTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학']);
  const [posts, setPosts] = useState([
    {
      id:0,
      title: "남자 코트 추천",
      likeCount: 0
    },
    {
      id:1,
      title: "강남 우동 맛집",
      likeCount: 0
    },
    {
      id:2,
      title: "리액 강의 독학",
      likeCount: 0
    }
  ]);
  const [modal, setModal] = useState(false);
  // const [like, likeChange] = useState([0, 0, 0]);
  const [title, setTitle] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // const InputButtonHandle = (e) =>{
  //   let copySubTitle = [...subTitle,e];
  //   setSubTitle(copySubTitle);
  // }
  const InputButtonHandle = (e) => {
    if(e===''){
    alert("입력하세요");
    e.preventDefault();
    }
    let copyPosts = [...posts];
    copyPosts.unshift(
      {
        id: new Date(),
        title:"d",
        likeCount: 0
      });
    setPosts(copyPosts);
  }

  // const DeleteButtonHandle = (e) =>{
  //   console.log(e);
  //   let copySubTitle = [...subTitle];
  //   subTitle.map(function(obj,index){
  //     if(e==obj){
  //       delete(copySubTitle[index]);
  //     }
  //   })
  //   setSubTitle(copySubTitle);
  // }
  const DeleteButtonHandle = (e) => {
    let copySubTitle = [...posts];
    copySubTitle.splice(e, 1);
    setPosts(copySubTitle);
  }

  // function changeWrite() {
  //   let copyTitle = [...subTitle];
  //   copyTitle[0] = '여자코트 추천';
  //   setSubTitle(copyTitle);
  // }
  const changeCoatHandler = () =>{
    let copyTitle = [...posts];
    copyTitle[0] = '여자코트 추천';
    setPosts(copyTitle);
  };

  const sortBlogHandler = () => {
    let copy = [...posts]
    copy.sort();
    setPosts(copy);
  }

  const likeCountHandler = (i) => {
    let copyLike = [...posts];
    copyLike[i] = copyLike[i] + 1;
    setPosts(copyLike);
  };

  const inputValueHandler = (_inputValue) => {
    setInputValue(_inputValue);
    console.log(_inputValue);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{blogTitle}</h4>
        <span onClick={() => {changeCoatHandler()}}>🔁</span>
        <button onClick={() => {sortBlogHandler()}}>블로그 정렬</button>
      </div>
      {
        posts.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setPosts.title(i) }}>{posts[i].title}
                <span onClick={(e) => {
                  e.stopPropagation();
                  likeCountHandler(i);}}>❤️
                </span>{posts[i].likeCount}
                <button onClick={(e) => {
                  e.stopPropagation();
                  DeleteButtonHandle(i) }}>X</button>
              </h4>
              <p>12월 04일 발행</p>
            </div>
          )
        })
      }
      <div>
        <input onChange={(e) => {
          e.preventDefault();
          inputValueHandler(e.target.value);}}/>
        <button onClick={() => InputButtonHandle(inputValue)}>블로그 글 추가하기</button>
      </div>
      {
        modal == true ? <Modal title={title} color={'skyblue'} posts={posts} /> : null
      }
    </div>
  );
}


function Modal({title, color, posts}) {
  return (
    <div className="modal" style={{ background: color }}>
      <h4>{posts[title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  )
}
export default App;