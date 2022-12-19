import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './Data.js';
import data1 from './Data1.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routers/Detail.js';
import Blog from './Blog.js';
import axios from 'axios';

function App() {

  let [modeling, setModeling] = useState(data);
  let navigate = useNavigate();
  const onAddButton = () =>{
    //로딩중 UI 띄우기
    axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
        console.log(result.data)
		let copyModeling = modeling.concat(result.data);
        console.log(copyModeling);
        setModeling(copyModeling);
        //로딩중 UI 숨기기
    })
        .catch(() => {
        console.log("실패");
      //로딩중 UI 숨기기
    })
}
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
            <Nav.Link onClick={() => { navigate('/etc-site') }}>ETC</Nav.Link>
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
                      <Items key={i} modeling={modeling} i={i} />
                    )
                  })
                }
              </Row>
            </Container>
            <button className="btn-add" onClick={() => {onAddButton()}}>상품 더보기</button>
          </>
        } />
        <Route path="/details" element={
          <div className="div-sub">
            <Container>
              <Row>
                {
                  modeling.map(function (obj, i) {
                    return (
                      <Items key={i} modeling={modeling} i={i} />)
                  })
                }
              </Row>
            </Container>
          </div>
        } />

        <Route path="/detail/:id" element={<Detail modeling={modeling} />} />
        <Route path="/etc-site" element={<Event modeling={modeling}></Event>}>
          <Route path="one" element={<Blog></Blog>} />
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
      <h2>Etc site</h2>
      <div className="btn-main">
        <button><Link to='/etc-site/one'>Blog</Link></button>
        <button><Link to='/etc-site/two'>Event 2</Link></button>
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

function Items({ modeling, i }) {
  return (
    <Col>
      <img src={'./basic' + modeling[i].id + '.png'} width="80%" />
      <h4>{modeling[i].title}</h4>
      <h5>{modeling[i].price}</h5>
      <Link to={'/detail/' + i}>{'Detail'}</Link>
    </Col>
  );
}

export default App;
