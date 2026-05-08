import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Home() {
  // 1. Tạo state để chứa danh sách máy ảnh từ SQL
  const [products, setProducts] = useState([]);

  // 2. Gọi API khi trang web vừa load
  useEffect(() => {
    axios
      .get("http://localhost:5094/api/Cameras")
      .then((response) => {
        setProducts(response.data); // Đổ dữ liệu thật vào đây
      })
      .catch((error) => {
        console.error("Lỗi kết nối Backend:", error);
      });
  }, []);

  return (
    <div className="shop-container">
      {/* Header / Thanh điều hướng - GIỮ NGUYÊN */}
      <nav className="navbar">
        <div className="logo">CAMERA STORE</div>
      </nav>

      {/* Hero Section - GIỮ NGUYÊN */}
      <header className="hero">
        <div className="hero-text">
          <h1>Ghi Lại Mọi Khoảnh Khắc</h1>
          <p>
            Chuyên cung cấp máy ảnh kỹ thuật số chính hãng hàng đầu Việt Nam.
          </p>
          <button className="btn-main">Xem ngay bộ sưu tập</button>
        </div>
      </header>

      {/* Danh sách sản phẩm - ĐÃ ĐỔ DỮ LIỆU THẬT */}
      <section className="products-section">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <div className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              {/* Lưu ý: Backend dùng imageUrl, code cũ dùng img */}
              <img
                src={item.imageUrl || "https://via.placeholder.com/500"}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              {/* Định dạng lại giá tiền cho đẹp */}
              <p className="price">
                {item.price ? item.price.toLocaleString() : "0"}đ
              </p>
              <button className="btn-buy">Thêm vào giỏ hàng</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer - GIỮ NGUYÊN */}
      <footer className="footer">
        <p>© 2026 Camera Store - TR.NHAN</p>
      </footer>
    </div>
  );
}

export default Home;
