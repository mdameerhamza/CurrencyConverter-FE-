import "./App.css";
import DashBoard from "./DashBoard";
import AboutUs from "./AboutUs";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />} />{" "}
        <Route path="about" element={<AboutUs />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
