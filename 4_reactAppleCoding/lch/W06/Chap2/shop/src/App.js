import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes, setShoes] = useState(data);
  let img = ['https://codingapple1.github.io/shop/shoes1.jpg', 'https://codingapple1.github.io/shop/shoes2.jpg', 'https://codingapple1.github.io/shop/shoes3.jpg']

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
    </div>
  );
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
