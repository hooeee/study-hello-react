import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from "react";
import data from './data.js';

function App() {

  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JDG Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          {shoes.map((shoe, i) => {
            return (
              <Modal shoe={shoe} i={i}></Modal>
            );
          })}
        </div>
      </div>

    </div>
  );
}

function Modal({ shoe, i }) {
  return (
    <div className='col-md-4' key={i}>
      <img src={shoe.img} width="80%" />
      <h4>{shoe.title}</h4>
      <p>{shoe.price}</p>
    </div>
  );
}

export default App;
