import "./App.css";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "남자 코트 추천", like: 0 },
    { id: 2, title: "강남 우동 맛집", like: 0 },
    { id: 3, title: "수원 맛집 추천", like: 0 },
  ]);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", like: 0 });

  const sortClickHandle = () => {
    setPosts([...posts].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const changeCoatHandle = () => {
    setPosts(
      posts.map((t) => {
        if (t.title.includes("코트")) {
          return {
            ...t,
            title: "여자 코트 추천",
            like: 0,
          };
        }
        return t;
      })
    );
  };

  const selectItme = (idx) => {
    setModalData({ ...posts[idx] });
    setModal(true);
  };

  const addLikeHandle = (idx) => {
    setPosts(
      posts.map((v, i) => {
        if (i == idx) v.like++;
        return v;
      })
    );
  };

  return (
    <div className="App">
      <div className="black-nav">{/* <h4>{logo}</h4> */}</div>
      <button onClick={sortClickHandle}>정렬</button>
      <button onClick={changeCoatHandle}>타이틀 변경</button>

      {posts.map((post, i) => (
        <Card
          key={i}
          id={post.id}
          like={post.like}
          title={post.title}
          addLikeHandle={() => {
            addLikeHandle(i);
          }}
          selectItme={() => {
            selectItme(i);
          }}
        />
      ))}

      {modal == true ? (
        <Modal
          setPosts={setPosts}
          color={"skyblue"}
          modalData={modalData}
          changeCoatEvent={changeCoatHandle}
        />
      ) : null}
    </div>
  );
}

function Card({ id, title, like, selectItme, addLikeHandle }) {
  return (
    <div className="list">
      <h4 onClick={selectItme}>
        <span>{title}</span>
        <span onClick={addLikeHandle}>👍</span>
        <span>{like}</span>
      </h4>
      <p>12월 03일 발행</p>
    </div>
  );
}

function Modal({ color, modalData, changeCoatEvent }) {
  return (
    <div className="modal" style={{ background: color }}>
      <h4>{modalData.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={changeCoatEvent}>글수정</button>
    </div>
  );
}

export default App;
