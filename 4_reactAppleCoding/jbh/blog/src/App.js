/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
    let [blogTitles, titleChanged] = useState(["남자 코트 추천", "강남 우동 맛집", "수원 맛집 추천"]);
    let [logo, setLogo] = useState("BeomBeomJoJo");
    let [likes, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [inputValue, setInputValue] = useState("");
    const [timer, setTime] = useState("");

    const repleSubmit = () => {
        let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
        let time = {
            year: today.getFullYear(), //현재 년도
            month: today.getMonth() + 1, // 현재 월
            date: today.getDate(), // 현제 날짜
            hours: today.getHours(), //현재 시간
            minutes: today.getMinutes(), //현재 분
        };

        let timestring = `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`;
        setTime(timestring);
    };

    return (
        <div className="App">
            <div className="black-nav">
                <h4>{logo}</h4>
            </div>
            <button
                onClick={() => {
                    let copy = [...blogTitles].sort();
                    titleChanged(copy);
                }}
            >
                가나다순정렬
            </button>
            <button
                onClick={() => {
                    let copy = [...blogTitles];
                    copy[0] = "여자 코트 추천";
                    titleChanged(copy);
                }}
            >
                타이틀 변경
            </button>

            {blogTitles.map(function (a, index) {
                repleSubmit;
                return (
                    <div className="list">
                        <h4
                            onClick={() => {
                                setModal(!modal);
                                setTitle(index);
                            }}
                        >
                            {blogTitles[index]}
                            <span
                                onClick={(event) => {
                                    event.stopPropagation();
                                    let copy = [...likes];
                                    copy[index] = copy[index] + 1;
                                    따봉변경(copy);
                                }}
                            >
                                👍
                            </span>{" "}
                            {likes[index]}
                            <button
                                onClick={(event) => {
                                    event.stopPropagation();
                                    let copy = [...blogTitles];
                                    copy.splice(index, 1);
                                    if (index > -1) titleChanged(copy);
                                }}
                            >
                                ❌
                            </button>
                        </h4>
                        <p>12월 03일 발행</p>
                        <p>{timer}하......</p>
                    </div>
                );
            })}

            <div>
                <input
                    onChange={(e) => {
                        setInputValue(e.target.value);
                        const target = document.querySelector(".addTitleBtn");
                    }}
                ></input>
                <button
                    disabled={!inputValue}
                    onClick={(event) => {
                        let copy = [...blogTitles];
                        //copy.push(inputValue);
                        copy.unshift(inputValue);
                        titleChanged(copy);
                    }}
                >
                    글 추가
                </button>
            </div>

            {modal == true ? <Modal titleChanged={titleChanged} color={"skyblue"} blogTitles={blogTitles} title={title} /> : null}

            <Modal2></Modal2>
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{ background: props.color }}>
            <h4>{props.blogTitles[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button
                onClick={() => {
                    let copy = [...props.blogTitles];
                    copy[0] = "여자 코트 추천";
                    props.titleChanged(copy);
                }}
            >
                글수정
            </button>
        </div>
    );
}

class Modal2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "kim",
            age: 20,
        };
    }
    render() {
        return (
            <div>
                안녕, 나는 옛날 문법이야...하.... {this.state.name}, {this.state.age}
                <button
                    onClick={() => {
                        this.setState({ age: 21 });
                    }}
                >
                    버튼
                </button>
            </div>
        );
    }
}

export default App;
