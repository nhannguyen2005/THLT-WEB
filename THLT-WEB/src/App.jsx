import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router basename="/camera-store-website">
      {/* Thanh Menu đơn giản */}
      <nav style={{ padding: "15px", background: "#222" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "20px" }}>
          Trang chủ
        </Link>
        <Link to="/about-us" style={{ color: "#fff" }}>
          Giới thiệu
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
