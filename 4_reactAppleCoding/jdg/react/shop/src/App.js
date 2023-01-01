import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { lazy, useEffect, useState } from "react";
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js';
import Cart from './pages/Cart.js';

// const Detail = lazy(() => import('./pages/Detail.js'));
// const Cart = lazy(() => import('./pages/Cart.js'));


import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function App() {

  useEffect(() => {
    if (localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify([]))
    }

    let item = localStorage.getItem('watched');
    item = JSON.parse(item);
    item = new Set(item);
    item = Array.from(item);
    setRecentItem(item);
  }, []);

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  const [buttonNum, setButtonNum] = useState(2);

  let [recentItem, setRecentItem] = useState();

  // react-query 이용하여 ajax 요청
  let result = useQuery('작명', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data
    });
  })

  // 성공/실패/로딩중 쉽게 파악가능
  const v1 = result.data
  const v2 = result.isLoading
  const v3 = result.error

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">JDG Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/event') }}>Event</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about') }}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div>
              <div className='main-bg'></div>
              <div>최근 본 상품</div>
              {
                // recentItem.map((id, i) => {
                //   return (
                //     <div key={i}>{id}</div>
                //   );
                // })
              }
              <div>
                {result.isLoading && '로딩중'}
                {result.error && '에러남'}
                {result.data && result.data.name}
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                {shoes.map((shoe, i) => {
                  return (
                    <Main key={i} shoe={shoe} i={i} navigate={navigate}></Main>
                  );
                })}
              </div>
            </div>
            <button onClick={() => {
              if (buttonNum > 3) return;
              axios.get(`https://codingapple1.github.io/shop/data${buttonNum}.json`)
                .then((result) => {
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                  setButtonNum(buttonNum + 1);
                })
                .catch(() => {
                  console.log('실패');
                });


              // post 
              axios.post('url', { name: 'kim' });

              // 여러 요청 동시에
              Promise.all([axios.get('url1'), axios.get('url2')])
                .then(() => { });

            }}>더보기</button>
          </>}></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/about" element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>로케이션임</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>없는 페이지예요</div>}></Route>
      </Routes>

    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <div>
        <Link to="/event/one">이벤트 1</Link>
      </div>
      <div>
        <Link to="/event/two">이벤트 2</Link>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <div>
        <Link to="/about/member">멤버</Link>
      </div>
      <div>
        <Link to="/about/location">location</Link>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

function Main({ shoe, i, navigate }) {
  return (
    <div className='col-md-4' key={i} onClick={() => {
      navigate('/detail/' + shoe.id)
    }}>
      <img src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="80%" />
      <h4>{shoe.title}</h4>
      <p>{shoe.price}</p>
    </div>
  );
}

export default App;
