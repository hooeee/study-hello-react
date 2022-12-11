import "./App.css";
import { useState } from "react";

function App() {

  const [posts, setPosts] = useState([
    {
      title : "남자 코트 추천",
      likeCnt : 0,
      createDate : "2월 17일 발행"
    },
    {
      title : "강남 우동 맛집",
      likeCnt : 0,
      createDate : "2월 18일 발행"
    },
    {
      title : "파이썬 독학",
      likeCnt : 0,
      createDate : "2월 19일 발행"
    }
  ]);

  const [isModal, setIsModal] = useState(false);
  const [pivot, setPivot] = useState(0);
  const [newPost, setNewPost] = useState("");
  const onClickTitle = (index) => 
  {
    setIsModal(true); 
    setPivot(index);
  };

  const onClickLikes = (index) => 
  {
    let copy = [...posts];
    copy[index].likeCnt++;
    setPosts(copy);
  };

  const onDeletePost = (delPost) => 
  {
    setPosts(posts.filter((item) => item !== delPost));
  };

  const onChangedNewPost = (e) => 
  {
    setNewPost(e.target.value);
  };

  const onAddNewPost = (newPostTitle) => 
  {
    if(newPostTitle === ''){
      return;
    }
    const newPost = {
      title: newPostTitle,
      likeCnt: 0,
      date:'2월 19일 발행'
    };
    setPosts([...posts, newPost]);
    setNewPost("");
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      
      <button onClick={ () =>
      {
          let copy = [...posts].sort((left, right) => left.title.localeCompare(right.title));
          setPosts(copy);

      }}>정렬</button>
      
      {posts.map(function (item, i) {
        return (
          <div className="list" key={i}>
            <h4 >
              <span onClick={ () => {onClickTitle(i)}}> {item.title} </span>
              <span onClick={ () => {onClickLikes(i)}}>👍</span> {item.likeCnt} 
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={() => {onDeletePost(item)}}>❌</button>
          </div>
        );
      })}

      <div>
        <input onInput={(e) => {onChangedNewPost(e)}}></input>
        <button onClick={() => {onAddNewPost(newPost)}}>Post 추가</button>
      </div>
      

      { isModal === true ? <Modal posts={posts} setPosts={setPosts} bgColor={"yellow"} pivot={pivot} /> : null}
    </div>
  );
}

function Modal({posts, setPosts, bgColor, pivot}){
  return (
    <div className='modal' style={{background: bgColor}}>
      <h4>{posts[pivot].title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => 
      {
         let copy = [...posts];
         copy[0].title = '여자 코트 추천';
         setPosts(copy);
      }}>
        글수정
      </button>
    </div>
  )
}

export default App;
