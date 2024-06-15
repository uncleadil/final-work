import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import NaviBar from "./Components/NaviBar";
import Home from "./Home";
import About from "./About";
import Orders from "./Orders";

function App() {
  return (
    <div>
      <Router>
        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/order" element={<Orders />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
