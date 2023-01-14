import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // document.querySelector('h4').innerHTML = post; ==> 자바스크립트 문법

  // jsx 문법1 | class 넣을 땐 : className
  // jsx 문법2 | 변수 데이터 바인딩 : {}
  // jsx 문법3 | style 넣을 땐 : style={{스타일명:'값'}} ==> object 형식으로

  // 중요한 데이터는 변수말고 satate에 담는다.
  //   - state 변경하는 법 : 두번째 인자 함수 이용

  let [gender, setGender] = useState("남자");

  const [subject, setSubject] = useState([
    {
      id: 0,
      title: "남자 코트 추천",
      likeCount: 0,
      date: new Date().toLocaleString(),
    },
    {
      id: 1,
      title: "강남 우동 맛집",
      likeCount: 0,
      date: new Date().toLocaleString(),
    },
    {
      id: 2,
      title: "파이썬 독학",
      likeCount: 0,
      date: new Date().toLocaleString(),
    },
  ]);

  const [sortText, setSortText] = useState("가나다순 정렬");

  const [currentModalID, setCurrentModalID] = useState(0);

  const [clickSubject, setClickSubject] = useState("");

  const [modal, setModal] = useState(false);

  const [isGenderButton, setGenderButton] = useState(false);

  const [inputValue, setInputValue] = useState("");

  function setSubjectGender() {
    if (gender === "남자") {
      gender = "여자";
    } else if (gender === "여자") {
      gender = "남자";
    }
    setGender(gender);

    let changedSubject = gender + " 코트 추천";
    subject.find((x) => x.id == currentModalID).title = changedSubject;
    setClickSubject(changedSubject);
  }

  function handleSortButtonClick() {
    if (sortText === "가나다순 정렬") {
      setSortText("원래대로");
    } else {
      setSortText("가나다순 정렬");
    }

    let copy = [...subject];
    copy.sort((x, y) => {
      if (sortText === "가나다순 정렬") {
        if (x.title < y.title) return -1;
        else if (x.title > y.title) return 1;
        else return 0;
      } else {
        if (x.id < y.id) return -1;
        else if (x.id > y.id) return 0;
        else return 0;
      }
    });
    setSubject(copy);
  }

  function handleSubjectClick({ id, title }) {
    setCurrentModalID(id);

    if (modal && id !== currentModalID) {
      setModal(true);
    } else {
      setModal(!modal);
    }

    setClickSubject(title);

    if (id == 0) {
      setGenderButton(true);
    } else {
      setGenderButton(false);
    }
  }

  function handleThumbsClick(e, post) {
    e.stopPropagation();
    let copy = [...subject];
    post.likeCount += 1;
    setSubject(copy);
  }

  function handlePushSubject() {
    if (inputValue.length <= 0) {
      return;
    }
    let copy = [...subject];
    copy.push({
      id: subject.length,
      title: inputValue,
      likeCount: 0,
      date: new Date().toLocaleString(),
    });
    setSubject(copy);
  }

  function handleFilterSubject(e) {
    let id = e.target.parentElement.children[0].id;
    let filter = subject.filter((x) => x.id != id);
    setSubject(filter);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "30px" }}>JDG 블로그</h4>
      </div>

      <button onClick={handleSortButtonClick}>{sortText}</button>

      {subject.map(function (post, i) {
        return (
          <div className="list" key={i}>
            <h4
              id={post.id}
              onClick={() => {
                handleSubjectClick(post);
              }}
            >
              {post.title}
              <span
                onClick={(e) => {
                  handleThumbsClick(e, post);
                }}
              >
                👍
              </span>
              {post.likeCount}
            </h4>
            <p>{post.date}</p>
            <button
              onClick={(e) => {
                handleFilterSubject(e);
              }}
            >
              글 삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      ></input>
      <button
        onClick={() => {
          handlePushSubject();
          setInputValue("");
        }}
      >
        글 발행
      </button>

      {modal === true ? (
        <Modal
          currentModalID={subject.find((x) => x.title === clickSubject).id}
          setSubjectGender={setSubjectGender}
          clickSubject={clickSubject}
          isGenderButton={isGenderButton}
        ></Modal>
      ) : null}
    </div>
  );
}

function Modal({
  currentModalID,
  setSubjectGender,
  clickSubject,
  isGenderButton,
}) {
  return (
    <div className="modal">
      <h4 className={currentModalID}>{clickSubject}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {isGenderButton && (
        <button button onClick={setSubjectGender}>
          성별수정
        </button>
      )}
    </div>
  );
}

export default App;
