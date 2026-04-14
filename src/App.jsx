import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style.css';

function App() {
  return (
    <div>
      <header>
        <h1>Hệ thống đặt sân bóng</h1>
      </header>

      <main>
        <h2>Đặt sân</h2>

        <div className="container">
          
          {/* Sân 1 */}
          <div className="sanbong1">
            <h3>Sân 1</h3>
            <p>
              Giá: 150k/30 phút (18h-21h) <br />
              250k/h (16h-18h)
            </p>

            <label>Giờ bắt đầu:</label>
            <input type="time" id="startTime" />

            <label>Giờ kết thúc:</label>
            <input type="time" id="endTime" />

            <button onClick={() => alert("Đặt sân 1 thành công!")}>
              Xác nhận đặt
            </button>

            <p className="status available">Sân Trống</p>
          </div>

          {/* Sân 2 */}
          <div className="sanbong2">
            <h3>Sân 2</h3>
            <p>
              Giá: 150k/30 phút (18h-21h) <br />
              250k/h (16h-18h)
            </p>

            <label>Giờ bắt đầu:</label>
            <input type="time" id="startTime2" />

            <label>Giờ kết thúc:</label>
            <input type="time" id="endTime2" />

            <button onClick={() => alert("Đặt sân 2 thành công!")}>
              Xác nhận đặt
            </button>

            <p className="status available">Sân Trống</p>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;