import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // document.querySelector('h4').innerHTML = post; ==> 자바스크립트 문법

  // jsx 문법1 | class 넣을 땐 : className
  // jsx 문법2 | 변수 데이터 바인딩 : {}
  // jsx 문법3 | style 넣을 땐 : style={{스타일명:'값'}} ==> object 형식으로

  let post = "강남 우동 맛집";

  let [성별, 성별변경] = useState("남자");

  let [글제목, 글제목변경] = useState([
    성별 + " 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]); // 중요한 데이터는 변수말고 satate에 담는다.

  let [따봉, 따봉변경] = useState([0, 0, 0]); // state 변경하는 법 : 두번째 인자 함수 이용

  let [modal, setModal] = useState(false);

  let [내가누른글제목, setClickSubject] = useState("");

  function 글제목성별변경() {
    if (성별 === "남자") {
      성별 = "여자";
    } else if (성별 === "여자") {
      성별 = "남자";
    }
    성별변경(성별);

    let copy = [...글제목];
    copy[0] = 성별 + " 코드 추천";
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "30px" }}>JDG 블로그</h4>
      </div>

      {/* <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={() => 따봉변경(따봉 + 1)}>👍</span> {따봉} </h4>
        <p>12월 01일 발행 <button onClick={() => 글제목성별변경()}>성별 변경</button></p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>12월 01일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => setModal(!modal)}>{글제목[2]}</h4>
        <p>12월 01일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setClickSubject(글제목[i]);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>12월 01일 발행</p>
          </div>
        );
      })}

      {modal === true ? (
        <Modal
          글제목={글제목}
          글제목성별변경={글제목성별변경}
          내가누른글제목={내가누른글제목}
        ></Modal>
      ) : null}

      <h4>{post}</h4>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.내가누른글제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button button onClick={() => props.글제목성별변경()}>
        성별수정
      </button>
    </div>
  );
}

export default App;
