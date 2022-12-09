import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import bg from "./asset/bg.png";
import { items } from "./data/Items";

function App() {
  const [datas, setData] = useState(items);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/detail">detail</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div
                className="main-bg"
                style={{ background: `url(${bg})` }}
              ></div>

              <div className="container">
                <div className="row">
                  {datas.map((item) => (
                    <Card key={item.id} shoes={item} />
                  ))}
                </div>
              </div>
            </div>
          }
        />
        <Route path="/detail" element={<div>상세페이지임</div>} />
      </Routes>
    </div>
  );
}

function Card({ shoes }) {
  return (
    <div className="col-md-4">
      <img src={shoes.image} width="80%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <p>{shoes.price}</p>
    </div>
  );
}

export default App;
