import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Nav/Navbar.jsx";
import { About, Dashboard, DataWrite } from "./Component/Tab/Tab.jsx";

function App() {
  return (
    <div className="App img-main">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
