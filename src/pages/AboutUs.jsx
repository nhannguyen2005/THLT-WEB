import './style.css'

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>Giới thiệu</h1>

        <p>
          Hệ thống đặt sân bóng giúp người dùng đặt sân nhanh chóng, tiện lợi và
          minh bạch giá cả theo khung giờ.
        </p>

        <p>
          Bạn có thể chọn sân, chọn thời gian và xác nhận đặt chỉ với vài thao tác đơn giản.
        </p>

        <div className="about-highlight">
          ⚽ Nhanh chóng • 📱 Dễ dùng • 💳 Minh bạch
        </div>
      </div>
    </div>
  )
}

export default AboutUs
