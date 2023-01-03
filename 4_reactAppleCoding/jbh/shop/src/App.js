import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailCard from "./routes/Detail";
import axios from "axios";
import Cart from "./routes/Cart";

function App() {
    let [shoes, setShoes] = useState(data);
    let [buttonCount, setButtonCount] = useState(1);
    let [buttonHidden, setButtonHidden] = useState(true);
    let navigate = useNavigate();

    return (
        <div className="App">
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">BeomBeomJoJoShop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => {
                                    navigate("/detail");
                                }}
                            >
                                Detail
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg"></div>
                            <div className="container">
                                <div className="row">
                                    {shoes.map(function (data, index) {
                                        return <Card index={index} title={data.title} content={data.content}></Card>;
                                    })}
                                </div>
                            </div>
                            {buttonHidden == true ? (
                                <button
                                    onClick={() => {
                                        setButtonCount(buttonCount + 1);
                                        let url = "";
                                        if (buttonCount == 1) {
                                            url = "https://codingapple1.github.io/shop/data2.json";
                                        } else if (buttonCount == 2) {
                                            url = "https://codingapple1.github.io/shop/data3.json";
                                        } else if (buttonCount == 3) {
                                            alert("그만 눌러...");
                                            url = "";
                                            setButtonHidden(false);
                                        }

                                        if (url != "") {
                                            axios
                                                .get(url)
                                                .then((data) => {
                                                    console.log(data.data);
                                                    let copy = [...shoes, ...data.data];
                                                    setShoes(copy);
                                                })
                                                .catch(() => {
                                                    console.log("실패함");
                                                });

                                            Promise.all([axios.get("/url1"), axios.get("/url2")]).then(() => {});
                                        }
                                    }}
                                >
                                    버튼
                                </button>
                            ) : null}
                        </>
                    }
                />
                <Route
                    path="/detail/:id"
                    element={
                        <>
                            <DetailCard shoes={shoes} />
                        </>
                    }
                />

                <Route path="/cart" element={<Cart></Cart>} />

                <Route path="*" element={<div>없는 페이지에요.</div>}></Route>
                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>멤버임</div>}></Route>
                    <Route path="location" element={<div>위치정보임</div>}></Route>
                </Route>

                <Route path="/event" element={<Event />}>
                    <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
                    <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사 정보임</h4>
            <Outlet></Outlet>
        </div>
    );
}

function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.index + 1) + ".jpg"} width="80%" />
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}

export default App;
