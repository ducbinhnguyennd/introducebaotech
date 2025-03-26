import React from "react";

const features = [
  "Đăng ký, đăng nhập",
  "Tạo kho chứa, quản lý sản phẩm",
  "Theo dõi sản phẩm bán chạy",
  "Thêm, sửa, xóa nhà cung cấp",
  "Nhập kho, quét mã IMEI"
];

const Features = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Chức năng chính</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {features.map((feature, index) => (
          <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
            ✅ {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
