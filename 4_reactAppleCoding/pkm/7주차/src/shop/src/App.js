import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './Data.js';
import data1 from './Data1.js';
import { createContext, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routers/Detail.js';
import Blog from './Blog.js';
import axios from 'axios';
import Loading from './LoadingPage/Loading';

export let Context1 = createContext() //state 보관함

function App() {

  let [modeling, setModeling] = useState(data);
  let [재고] = useState([10,11,12]);
  let navigate = useNavigate();
  let [btnCount, setBtnCount] = useState(0);
  let [btnHidden, setBtnHidden] = useState(0);
  let [loadingHidden, setLoadingHidden] = useState(false);

  const onAddButton = () => {
    //로딩중 UI 띄우기
    setLoadingHidden(true);
    if (btnCount === 0) {
      setBtnCount(btnCount += 1);
      axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result) => {
          console.log(result.data)
          let copyModeling = modeling.concat(result.data);
          console.log(copyModeling);
          setModeling(copyModeling);
          //로딩중 UI 숨기기
          setTimeout (()=>{setLoadingHidden(false)
          },500);
        })
        .catch(() => {
          console.log("실패");
          setTimeout (()=>{setLoadingHidden(false)
          },500);          //로딩중 UI 숨기기
        })
    } else if (btnCount === 1) {
      setBtnCount(btnCount += 1);
      axios.get('https://codingapple1.github.io/shop/data3.json')
        .then((result) => {
          console.log(result.data)
          let copyModeling = modeling.concat(result.data);
          console.log(copyModeling);
          setModeling(copyModeling);
          //로딩중 UI 숨기기
          setTimeout (()=>{setLoadingHidden(false)
          },500);
        })
        .catch(() => {
          console.log("실패");
          //로딩중 UI 숨기기
          setTimeout (()=>{setLoadingHidden(false)
          },500);
        })
    } else if (btnCount === 2) {
      let copyBtnHidden = btnHidden;
      copyBtnHidden=1;
      console.log(copyBtnHidden);
      setBtnHidden(copyBtnHidden);
      alert("상품이 더 이상 존재하지 않습니다.")
      setTimeout (()=>{setLoadingHidden(false)
      },500);
    }
    console.log(btnCount)
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
            {
               btnHidden==0 ? <button className="btn-add" onClick={() => { onAddButton()}}>상품 더보기</button> : null
            }
            {
               loadingHidden ? <Loading /> : null
            }
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

        <Route path="/detail/:id" element={
        <Context1.Provider value={{재고, modeling}}>
        <Detail modeling={modeling} />
        </Context1.Provider>
        } />
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
