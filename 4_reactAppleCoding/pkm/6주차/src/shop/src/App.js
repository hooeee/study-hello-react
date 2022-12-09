import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './Data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routers/Detail.js';

function App() {

  let [modeling] = useState(data);
  let navigate = useNavigate();

  // let [imgs] = usestate([
  //   {
  //     id: 0,
  //     imgName : "./basic.png"
  //   },
  //   {
  //     id: 1,
  //     imgName : "./basic.png"
  //   },
  //   {
  //     id: 2,
  //     imgName : "./basic.png"
  //   },
  // ])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">3DPIT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link className="navbar-nav nav-link " to="/">홈</Link>
            <Link className="navbar-nav nav-link " to="/detail">상세페이지</Link> */}
            {/* <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link href="#F&Q">F&Q</Nav.Link> */}
            <Nav.Link onClick={() => { navigate('/') }}>HOME</Nav.Link>
            <Nav.Link onClick={() => { navigate('/details') }}>DETAILS</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>EVENT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <Container>
              <Row>
                {
                  modeling.map(function (obj, i) {
                    return (
                        <Items key={i} data={data} i={i} />
                      )
                  })
                }
              </Row>
            </Container>
          </>
        } />
        <Route path="/details" element={
          <Container>
              <Row>
                {
                  modeling.map(function (obj, i) {
                    return (
                      <Items key={i} data={data} i={i} />)
                  })
                }
              </Row>
            </Container>
        }/>
        <Route path="/detail/:id" element={<Detail modeling={modeling}/>} />
        <Route path="/event" element={<Event modeling={modeling}></Event>}>
          <Route path="one" element={<div><h3>첫 주문시 양배추즙 서비스</h3></div>} />
          <Route path="two" element={<div><h3>생일 기념 쿠폰받기</h3></div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <div>
        <button><Link to='/event/one'>Event 1</Link></button>
        <button><Link to='/event/two'>Event 2</Link></button>
      </div>
      <Outlet></Outlet>
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

function Items({ data, i }) {
  return (
    <Col>
      <img src={'./basic' + data[i].id + '.png'} width="50%" />
      <h4>{data[i].title}</h4>
      <p>{data[i].price}</p>
      <Link to={'/detail/'+i}>{'Detail'}</Link>
    </Col>
  );
}

export default App;
