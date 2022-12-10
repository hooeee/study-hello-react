import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";

function App() {
    let [shoes, setShoes] = useState(data);

    return (
        <div className="App">
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">BeomBeomJoJoShop</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">ShoeShop</Nav.Link>
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Cart</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <div className="main-bg"></div>

            <div className="container">
                <div className="row">
                    {shoes.map(function (data, index) {
                        return <Card index={index} image={data.image} title={data.title} content={data.content}></Card>;
                    })}
                </div>
            </div>
        </div>
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.index + 1) + ".jpg"} width="80%" />
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    );
}

export default App;
