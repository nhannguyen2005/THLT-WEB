import { Routes, Route, Link } from 'react-router-dom'
import './style.css'
import AboutUs from './pages/AboutUs'

function Home() {
  return (
    <main>
      <h2>Đặt sân</h2>

      <div className="container">

        <div className="sanbong1">
          <h3>Sân 1</h3>
          <p>
            Giá: 150k/30 phút (18h-21h) <br />
            250k/h (16h-18h)
          </p>

          <label>Giờ bắt đầu:</label>
          <input type="time" />

          <label>Giờ kết thúc:</label>
          <input type="time" />

          <button onClick={() => alert("Đặt sân 1 thành công!")}>
            Xác nhận đặt
          </button>

          <p className="status available">Sân Trống</p>
        </div>

        <div className="sanbong2">
          <h3>Sân 2</h3>
          <p>
            Giá: 150k/30 phút (18h-21h) <br />
            250k/h (16h-18h)
          </p>

          <label>Giờ bắt đầu:</label>
          <input type="time" />

          <label>Giờ kết thúc:</label>
          <input type="time" />

          <button onClick={() => alert("Đặt sân 2 thành công!")}>
            Xác nhận đặt
          </button>

          <p className="status available">Sân Trống</p>
        </div>

      </div>
    </main>
  )
}

function App() {
  return (
    <div>
      {/* NAVIGATION */}
      <nav style={{ padding: "10px", background: "#222" }}>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>
          Trang chủ
        </Link>

        <Link to="/about" style={{ color: "white" }}>
          Giới thiệu
        </Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App
