import logo from "./logo.svg";
import "./App.css";
import Navbar1 from "./Component/Nav/Navbar.jsx";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { About, Dashboard, DataWrite } from "./Component/Tab/Tab.jsx";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar1>
        <Container>
          <Navbar1></Navbar1>
        </Container>
      </Navbar1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="img-main" />
            </>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/exercisewrite" element={<DataWrite />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
