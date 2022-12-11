import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MireroShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {shoes.map((item, idx) =>{
                  return (
                    <Card props={item} i={idx + 1}/>
                  )
                })}
              </div>
            </div>
          </>
        }/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>}/>
          <Route path="location" element={<div>location</div>}/>
        </Route>
        <Route path="*" element={<div>없는 페이지</div>}/>
      </Routes>
    </div>
  );
}

function Card(item){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ item.i +'.jpg'} width="80%"/>
      <h4>{item.props.title}</h4>
      <p>{item.props.content}</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
