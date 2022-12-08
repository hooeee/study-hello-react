import './App.css';
import { useState } from 'react';

function App() {

  const [blogTitle, setLogo] = useState('3DPIT BLOG');
  // const [subTitle, setSubTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트 독학']);
  const [posts, setPosts] = useState([
    {
      id:0,
      title: "남자 코트 추천",
      likeCount: 0,
      date: '2022-12-04 12:00:00 '
    },
    {
      id:1,
      title: "강남 우동 맛집",
      likeCount: 0,
      date: '2022-12-05 12:00:00 '
    },
    {
      id:2,
      title: "리액 강의 독학",
      likeCount: 0,
      date: '2022-12-06 12:00:00 '
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
  const InputButtonHandle = (_inputValue) => {
    if(_inputValue===''){
    alert("입력하세요");
    _inputValue.preventDefault();
    }
    let copyPosts = [...posts];
    const copyDate = new Date();
    const year = copyDate.getFullYear();
    const month = String(copyDate.getMonth()).padStart(2,"0");
    const day = String(copyDate.getDay()).padStart(2,"0");
    const hour = String(copyDate.getHours()).padStart(2,"0");
    const minute = String(copyDate.getMinutes()).padStart(2,"0");
    const seconds = String(copyDate.getSeconds()).padStart(2,"0");
    const postsDate = `${year}-${month}-${day} ${hour}:${minute}:${seconds} `
    console.log(year);
    copyPosts.unshift(
      {
        id: copyDate.getTime(),
        title: _inputValue,
        likeCount: 0,
        date: postsDate
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
    let copyPosts = [...posts];
    copyPosts.map(function(obj){
      if(obj.title.match('남자 코트')){
        console.log(obj.title);
        obj.title = '여자 코트 추천';
      }
    })
    setPosts(copyPosts);
  };

  const sortBlogHandler = () => {
    //대소문자 구분 없이
    let copyPosts = [...posts]
    console.log(copyPosts);
    copyPosts.sort((a,b)=>{
      const upperCaseA = a.title.toUpperCase();
      const upperCaseB = b.title.toUpperCase();
      if(upperCaseA > upperCaseB) return 1;
      if(upperCaseA< upperCaseB) return -1;
      if(upperCaseA===upperCaseB) return 0;
    });
    console.log(copyPosts);
    setPosts(copyPosts);
  }

  const likeCountHandler = (i) => {
    let copyPosts = [...posts];
    copyPosts[i].likeCount = copyPosts[i].likeCount + 1;
    setPosts(copyPosts);
  };

  const inputValueHandler = (_inputValue) => {
    setInputValue(_inputValue);
    console.log(_inputValue);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{blogTitle}</h4>
        <button className="basic-btn" onClick={() => {changeCoatHandler()}}>코트성별🔁</button>
        <button className="basic-btn" onClick={() => {sortBlogHandler()}}>블로그 정렬</button>
      </div>
      {
        posts.map(function (obj, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(!modal); setTitle(i) }}>{obj.title}
                <span onClick={(e) => {
                  e.stopPropagation();
                  likeCountHandler(i);}}>❤️
                </span>{obj.likeCount}
                <button className="delete-btn" onClick={(e) => {
                  e.stopPropagation();
                  DeleteButtonHandle(i) }}>X</button>
              </h4>
              <p>{obj.date}발행</p>
            </div>
          )
        })
      }
      <div>
        <input onChange={(e) => {inputValueHandler(e.target.value)}}/>
        <button className="basic-btn" onClick={() => InputButtonHandle(inputValue)}>블로그 글 추가하기</button>
      </div>
      {
        modal === true ? <Modal title={title} color={'skyblue'} posts={posts} /> : null
      }
    </div>
  );
}

function Modal({title, color, posts}) {
  return (
    <div className="modal" style={{ background: color }}>
      <h4>{posts[title].title}</h4>
      <p>{posts[title].date}발행</p>
      <p>상세내용</p>
      <button className="basic-btn">글 수정</button>
    </div>
  )
}
export default App;