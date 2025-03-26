import React from "react";

const Warehousing = () => {
  return (
    <>
      <div style={{ width: "70%" }}>
        <div style={{ padding: "32px" }}>
          <h2>Kho</h2>
          <p>Hướng dẫn sử dụng chức năng về kho kho</p>
        </div>
        <div style={{ padding: "0 32px" }}>
          <div className="nhapkho">
            <h3>1. Tổng quan về nhập kho</h3>
            <div className="content">
              <p>
                Giúp quản lý cửa hàng có thể xem tổng quan tình hình kho tại cửa
                hàng theo nhiều tiêu chí khác nhau, ví dụ như:
              </p>
              <ul>
                <li>Mã lô hàng</li>
                <li>Tên lô hàng</li>
                <li>Ngày nhập</li>
                <li>Tổng tiền</li>
                <li>Số lượng còn lại</li>
              </ul>
              <p>
                Quản lý còn có thể xem danh sách sản phẩm, mỗi sản phẩm bao gồm
                các thông tin như sau:
              </p>
              <ul>
                <li>Mã SKU</li>
                <li>Mã Imel</li>
                <li>Tên máy/Linh kiện</li>
                <li>Số lượng</li>
                <li>Đơn giá</li>
                <li>Thành tiền</li>
                <li>Chức năng</li>
              </ul>
              <img
                src="images/nhapkho.png"
                alt=""
                style={{ width: "100%" }}
              ></img>
            </div>
            <ul className="list">
              <li className="item">
                <h4>1.1 Thêm lô hàng</h4>
                <p>
                  <strong>Bước 1: </strong>Nhấn vào nút thêm lô hàng trên thanh
                  bar
                </p>
                <img
                  src="images/nk-step-1.png"
                  alt=""
                  style={{ width: "100%" }}
                ></img>
                <p>
                  <strong>Bước 2: </strong>Nhập thông tin cần thiết{" "}
                  <strong>
                    (Chọn phương thức thanh toán bằng ghi nợ hoặc thanh toán
                    ngay chuyển khoản, tiền mặt)
                  </strong>{" "}
                  Sau đó nhấn nút thêm sản phẩm
                </p>
                <p>Chi tiết:</p>
                <p>
                  Có thể nhập tay Imel hoặc quét mã imel{" "}
                  <strong>chỉ dùng cho điện thoại</strong>
                </p>
                <p>
                  Vào điện thoại nhấn vào thêm lô hàng, nhập mã lô hàng hiện
                  trên máy tính và bắt đầu quét
                </p>
                <p>
                  Quét xong bấm thêm thì sẽ thêm sản phẩm vào trong lô hàng và
                  tạo
                </p>
                <p>
                  Các bước còn lại thực hiện trên máy tính (Nhập thông tin lô
                  hàng)
                </p>
                <img
                  src="images/nk-step-2.png"
                  alt=""
                  style={{ width: "100%" }}
                ></img>
                <p>
                  <strong>Bước 3: </strong>Nếu thêm thành công sẽ hiển thị thông
                  báo thêm thành công và cập nhật lại danh sách lô hàng
                </p>
                <img
                  src="images/nk-step-3.png"
                  alt=""
                  style={{ width: "100%" }}
                ></img>
              </li>
              <li className="item">
                <h4>1.2 Sửa lô hàng</h4>
                <p>
                  <strong>Bước 1: </strong>Chọn lô hàng cần sửa, sau đó nhấn vào
                  nút sửa lô hàng trên thanh bar
                </p>
                <img
                  src="images/nk-upd-step-1.png"
                  alt=""
                  style={{ width: "100%" }}
                ></img>
                <p>
                  <strong>Bước 2: </strong>Sửa thông tin cần thiết. Sau đó nhấn
                  nút cập nhật lô hàng
                </p>
                <img
                  src="images/nk-upd-step-2.png"
                  alt=""
                  style={{ width: "100%" }}
                ></img>
                <p>
                  <strong>Bước 3: </strong>Nếu cập nhật thành công sẽ hiển thị
                  thông báo cập nhật thành công và cập nhật lại danh sách lô
                  hàng
                </p>
                <img
                  src="images/nk-upd-step-3.png"
                  alt=""
                  style={{ width: "100%" }}
                ></img>
              </li>
            </ul>
          </div>
          <div className="xuatkho">
            <h3>2. Tổng quan về xuất kho</h3>
            <p>
              Giúp quản lý cửa hàng có thể xem tổng quan tình hình các sản phẩm
              đã xuất kho tại cửa hàng theo nhiều tiêu chí khác nhau, ví dụ như:
            </p>
            <ul>
              <li>Mã lô hàng</li>
              <li>Mã sản phẩm</li>
              <li>Imel</li>
              <li>Tên Sản Phẩm</li>
              <li>Ngày nhập</li>
              <li>Ngày Xuất</li>
            </ul>
            <img
              src="images/xuatkho.png"
              alt=""
              style={{ width: "100%" }}
            ></img>
          </div>
          <div className="dieuchuyen">
            <h3>3. Tổng quan về lệnh điều chuyển</h3>
            <p>
              Giúp quản lý cửa hàng có thể xem tổng quan tình hình về lệnh điều
              chuyển tại cửa hàng theo nhiều tiêu chí khác nhau, ví dụ như:
            </p>
            <ul>
              <li>Ngày chuyển</li>
              <li>Tên sản phẩm</li>
              <li>Kho chuyển</li>
              <li>Kho nhận</li>
              <li>Lí do</li>
              <li>Số lượng</li>
            </ul>
            <img
              src="images/dieuchuyen.png"
              alt=""
              style={{ width: "100%" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Warehousing;
