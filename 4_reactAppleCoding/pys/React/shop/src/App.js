import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { data } from "./data/products.js";
import { createContext, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Detail } from "./Detail";
import { About } from "./About";
import axios from "axios";

export let Context1 = createContext();

function App() {
  let [재고] = useState([10, 11, 12]);
  let [products, setProducts] = useState(data);
  let [count, setCount] = useState(2);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Amazon</Navbar.Brand>
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

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {products.map((item, index) => {
                    if (item.src == null) {
                      item.src = products[index - 3].src;
                    }
                    return <Product key={index} product={item} />;
                  })}
                </div>
              </div>
              {count <= 3 == true ? (
                <button
                  onClick={() => {
                    axios
                      .get(
                        `https://codingapple1.github.io/shop/data${count}.json`
                      )
                      .then((result) => {
                        let newproducts = [...products, ...result.data];
                        setProducts(newproducts);
                        setCount(count + 1);
                      })
                      .catch(() => {
                        console.log("실패");
                      });
                  }}
                >
                  더보기
                </button>
              ) : null}
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, products }}>
              <Detail products={products} />
            </Context1.Provider>
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<>멤버임</>} />
          <Route path="location" element={<>위치정보임</>} />
        </Route>

        <Route path="*" element={<>없는 페이지 입니다.</>} />
      </Routes>
    </div>
  );
}

function Product({ product }) {
  return (
    <div className="col-md-4">
      <img src={product.src} width="80%"></img>
      <h4>{product.title}</h4>
      <p>{product.content}</p>
    </div>
  );
}

export default App;
