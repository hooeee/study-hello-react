import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './Data.js';
import { useState } from 'react';
function App() {

  let [modeling] = useState(data);
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
          <Navbar.Brand href="#home">3DPIT SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link href="#F&Q">F&Q</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>

      <Container>
        <Row>
          {
            modeling.map(function(obj, i){
              return (
                <Items  key = {i} data = {data}  i= {i}/>)
            })
          }
        </Row>
      </Container>
    </div>
  );
}

function Items({ data, i }) {
  return (
    <Col>
      <img src={'./basic'+i+'.png'} width="80%" />
      <h4>{data[i].title}</h4>
      <p>{data[i].price}</p>
    </Col>
  );
}

export default App;
