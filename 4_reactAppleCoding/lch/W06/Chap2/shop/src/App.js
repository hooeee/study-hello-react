import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail.js';

function App() {

  let [shoes, setShoes] = useState(data);
  let img = ['https://codingapple1.github.io/shop/shoes1.jpg', 'https://codingapple1.github.io/shop/shoes2.jpg', 'https://codingapple1.github.io/shop/shoes3.jpg']
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>
          <div className='container'>
            <div className='row'>
              {
                img.map(function(a, i) {
                  return (
                    <ProductInfo img={a} title={shoes[i].title} content={shoes[i].content}></ProductInfo>
                  );
                })
              }
            </div>
          </div>
          </>
        }/>
        <Route path='/detail/:id' element={
          <Detail shoes={shoes}></Detail>
        }/>
        <Route path='/about' element={ <About></About> }>
          <Route path='member' element={<div>멤버임</div>}></Route>
          <Route path='location' element={<div>위치정보임</div>}></Route>
        </Route>

        <Route path='/event' element={ 
            <div>
              <h4>오늘의 이벤트</h4>
              <Outlet></Outlet> 
            </div>
          }>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function ProductInfo(props) {
  return (
    <div className='col-md-4'>
      <img src={props.img} width="80%"/>
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}

export default App;
