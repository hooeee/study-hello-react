import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Fade } from "react-bootstrap";
import { lazy, Suspense, createContext, useEffect, useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
// import Detail from "./routes/detail.js";
// import Cart from "./routes/Cart.js";
import axios from "axios";
import { useQuery } from "react-query";

export let Context1 = createContext();

const Detail = lazy(() => import("./routes/detail.js"));
const Cart = lazy(() => import("./routes/Cart.js"));

function App() {
  // let obj = { name: "kim" };
  // localStorage.setItem("data", JSON.stringify(obj));
  // let 꺼낸거 = localStorage.getItem("data");
  // console.log(JSON.parse(꺼낸거).name);
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  });

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let [more, setMore] = useState(2);
  let [fade, setFade] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (more > 3) setFade("start");
  }, [more]);

  let result = useQuery("작명", () => {
    return (
      axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
        return a.data;
      }),
      { staleTime: 2000 }
    );
  });

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
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
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading ? "로딩중" : result.data.name}
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-bg"></div>
                <div className="container">
                  <div className="row">
                    {shoes.map(function (a, i) {
                      return (
                        <ProductInfo
                          shoes={a}
                          navigate={navigate}
                        ></ProductInfo>
                      );
                    })}
                  </div>
                </div>
                <button
                  className={fade}
                  onClick={() => {
                    if (more > 3) return;
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${more}.json`
                      )
                      .then((data) => {
                        let copy = [...shoes].concat(data.data);
                        setShoes(copy);
                        setMore(more + 1);
                      });

                    // Promise.all([ axios.get('/url1'), axios.get('/url2') ])
                    // .then(() => {});
                  }}
                >
                  더보기
                </button>
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Context1.Provider value={{ 재고 }}>
                <Detail shoes={shoes}></Detail>
              </Context1.Provider>
            }
          />

          <Route path="/cart" element={<Cart />}></Route>

          <Route path="/about" element={<About></About>}>
            <Route path="member" element={<div>멤버임</div>}></Route>
            <Route path="location" element={<div>위치정보임</div>}></Route>
          </Route>

          <Route
            path="/event"
            element={
              <div>
                <h4>오늘의 이벤트</h4>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route
              path="one"
              element={<div>첫 주문시 양배추즙 서비스</div>}
            ></Route>
            <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function ProductInfo(props) {
  return (
    <div
      className="col-md-4"
      onClick={() => {
        props.navigate(`/detail/${props.shoes.id}`);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          props.shoes.id + 1
        }.jpg`}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
  );
}

export default App;
