import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {data} from './data/products.js'
import {useState} from 'react'
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import {Detail} from './Detail'
import {About} from './About'


function App() {

  let [products] = useState(data);
  let navigate = useNavigate();
  

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Amazon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div>
          <div className='container'>
            <div className='row'>
              {
                products.map((item, index) => {
                  return (
                    <Product key={index} product={item}/>
                  )
                })
              }
            </div>
          </div>
        </>
        }/>
        <Route path="/detail/:id" element={<Detail products={products}/>} />
        <Route path="/about" element={<About />}>
            <Route path="member" element={<>멤버임</>} />
            <Route path="location" element={<>위치정보임</>} />
        </Route>

        <Route path="*" element={<>없는 페이지 입니다.</>} />
        
      </Routes>



      

      
    </div>
  );
}

function Product({product}){
  return(
    <div className='col-md-4'>
      <img src={product.src} width='80%'></img>
      <h4>{product.title}</h4>
      <p>{product.content}</p>
    </div>
    
  )
}

export default App;
