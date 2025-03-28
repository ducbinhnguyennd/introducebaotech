import React from "react";

const Overview = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <h2>Tổng quan</h2>
        </div>
        <div className="content">
          <div>
            <strong>1. Tổng quan doanh thu </strong>
            <p>
              Giúp quản lý cửa hàng có thể xem tổng quan tình hình kinh doanh
              tại cửa hàng theo nhiều tiêu chí khác nhau, ví dụ như Hoạt động
              kinh doanh trong ngày; Doanh thu, chi phí, lợi nhuận… Chi tiết như
              sau:
            </p>
            <img
              src="images/overview.png"
              alt="overview"
              style={{ width: "100%" }}
            ></img>
            <img
              src="images/overview2.png"
              alt="overview"
              style={{ width: "100%" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
