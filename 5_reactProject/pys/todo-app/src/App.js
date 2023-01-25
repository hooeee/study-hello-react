import "./App.css";
import { Header, Sidebar } from "./components/organisms";
import { Manage, Today } from "./pages/";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Today />} />
          <Route path="/manage" element={<Manage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
