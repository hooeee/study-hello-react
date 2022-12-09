import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./App.css";
import bg from "./asset/bg.png";
import { items } from "./data/Items";

function App() {
  const [datas, setDatas] = useState(items);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home shoes={datas} />} />
        <Route path="/detail/:id" element={<Detail shoes={datas} />} />
      </Routes>
    </div>
  );
}

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/detail">detail</Link>
          <Nav.Link></Nav.Link>
          <Nav.Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

function Home({ shoes }) {
  return (
    <>
      <div>
        <div className="main-bg" style={{ background: `url(${bg})` }}></div>

        <div className="container">
          <div className="row">
            {shoes.map((item) => (
              <Link to={`/detail/${item.id}`} key={item.id}>
                <Card shoes={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Detail({ shoes }) {
  let { id } = useParams();
  console.log(id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[0].content}</p>
          <p>{shoes[0].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
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
