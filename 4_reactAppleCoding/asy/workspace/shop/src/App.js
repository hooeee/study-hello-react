import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/detail.js';
import axios from 'axios'

export let Context1 = createContext()

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [addBtnCount, setAddBtnCount] = useState(0);
  let [재고] = useState([10,11,12])

  useEffect(() => {
    if(addBtnCount >= 3){
      alert('세번 이상 클릭 ㄴㄴ');
      setAddBtnCount(0)
    }
  }, [addBtnCount])

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MireroShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/0')}}>detail</Nav.Link>
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
            <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((data)=>{
                  let copy = [...shoes, ...data.data]
                  setShoes(copy)
                })
                // addBtnCount++
                // setAddBtnCount(addBtnCount);
            }}>
              더 보기
            </button>
          </>
        }/>

        <Route path="/detail/:id" element={
            <Context1.Provider value={{재고}}>
              <Detail shoes={shoes}/>
            </Context1.Provider>
          }/>
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
