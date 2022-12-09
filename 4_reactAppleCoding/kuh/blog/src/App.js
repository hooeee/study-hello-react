import "./App.css";
import { useState } from "react";
import { postsInitData } from "./data/initData";

function App() {
  const [posts, setPosts] = useState(postsInitData);
  const [modalData, setModalData] = useState(null);

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

  const addLikeHandle = (idx) => {
    setPosts(
      posts.map((v, i) => {
        if (i == idx) v.like++;
        return v;
      })
    );
  };

  const modalCloseHandle = () => {
    setModalData(null);
  };

  return (
    <div className="App">
      <div className="title-header">
        <h4>하이여</h4>
      </div>
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
            setModalData({ ...post });
          }}
        />
      ))}

      {modalData != null ? (
        <Modal
          setPosts={setPosts}
          color={"skyblue"}
          modalData={modalData}
          changeCoatEvent={changeCoatHandle}
          modalCloseHandle={modalCloseHandle}
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
        <span
          onClick={(e) => {
            e.stopPropagation();
            addLikeHandle();
          }}
        >
          👍
        </span>
        <span>{like}</span>
      </h4>
      <p>12월 03일 발행</p>
    </div>
  );
}

function Modal({ color, modalData, changeCoatEvent, modalCloseHandle }) {
  return (
    <div className="modal" style={{ background: color }}>
      <h4>
        <span>{modalData.title}</span>
        <span>👍 {modalData.like}</span>
        <span onClick={modalCloseHandle}>X</span>
      </h4>
      <p>
        <div>날짜</div>
        <span>{modalData.date} 발행</span>
      </p>
      <p>
        <div>상세</div>
        <span>{modalData.context}</span>
      </p>
      <button onClick={changeCoatEvent}>글수정</button>
    </div>
  );
}

export default App;
