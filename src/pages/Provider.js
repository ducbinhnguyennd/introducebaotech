import React from "react";

const Provider = () => {
  return (
    <>
      {/* <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: 0 }}>Nhà cung cấp</h2>
      </div> */}
      <div style={{ width: "70%" }}>
        <div style={{ padding: "32px" }}>
          <h2>Tổng quan về nhà cung cấp</h2>
        </div>
        <div style={{ padding: "0 32px" }}>
          <div>
            <strong>1. Nhà cung cấp </strong>
            <p>
              Giúp quản lý cửa hàng có thể xem tổng quan tình hình kinh doanh
              tại cửa hàng theo nhiều tiêu chí khác nhau, ví dụ như Hoạt động
              kinh doanh trong ngày; Doanh thu, chi phí, lợi nhuận… Chi tiết như
              sau:
            </p>
            <img
              src="images/provider.png"
              alt="provider"
              style={{ width: "100%" }}
            ></img>
          </div>
          <div>
            <div className="addProvider">
              <strong>2. Các bước thực hiện</strong>
              <p>
                Tại màn hình Nhà cung cấp, phần mềm hiển thị danh sách các nhà
                cung cấp theo bảng bao gồm: Mã nhà cung cấp, Tên nhà cung cấp,
                Số điện thoại, Địa chỉ.
              </p>
              <p>Có các hành động như Xem, Thêm, Sửa, Xóa nhà cung cấp.</p>
              <img
                src="images/provider.png"
                alt="overview"
                style={{ width: "100%" }}
              ></img>
              <div className="addProvider">
                <strong>2.1. Thêm nhà cung cấp</strong>
                <p>
                  <strong>Bước 1:</strong>Bấm nút thêm nhà cung cấp ở thanh bar
                  để mở giao diện thêm:
                </p>
                <img
                  src="images/addProvider.png"
                  alt="overview"
                  style={{ width: "100%" }}
                ></img>
                <p>
                  <strong>Bước 2: </strong>Nhập đầy đủ các thông tin, (*) là
                  những thông tin bắt buộc.
                  <img
                    src="images/step-2-add-provider.png"
                    alt="overview"
                    style={{ width: "100%" }}
                  ></img>
                </p>
                <p>
                  <strong>Bước 3: </strong>Nhấn nút thêm nhà cung cấp để thêm
                  nhà cung cấp vào danh sách.
                  <img
                    src="images/step-3-add-provider.png"
                    alt="overview"
                    style={{ width: "100%" }}
                  ></img>
                </p>
                <p>
                  <strong>Bước 4: </strong>Thêm thành công, xem lại danh sách.
                  <img
                    src="images/end-add-provider.png"
                    alt="overview"
                    style={{ width: "100%" }}
                  ></img>
                </p>
              </div>
              <div className="editProvider">
                <strong>2.2. Sửa thông tin nhà cung cấp</strong>
                <p>
                  <strong>Bước 1:</strong>Tích chọn vào nhà cung cấp{" "}
                  <strong>(chỉ được chọn 1 nhà cung cấp)</strong>. Sau đó bấm
                  nút Sửa để mở giao diện sửa:
                </p>
                <img
                  src="images/addProvider.png"
                  alt="overview"
                  style={{ width: "100%" }}
                ></img>
                <p>
                  <strong>Bước 2: </strong>Nhập đầy đủ các thông tin cần sửa.
                  <img
                    src="images/step-2-upd-provider.png"
                    alt="overview"
                    style={{ width: "100%" }}
                  ></img>
                </p>
                <p>
                  <strong>Bước 3: </strong>Nhấn nút cập nhật nhà cung cấp để cập
                  nhật thông tin nhà cung cấp.
                  <img
                    src="images/step-3-upd-provider.png"
                    alt="overview"
                    style={{ width: "100%" }}
                  ></img>
                </p>
                <p>
                  <strong>Bước 4: </strong>Cập nhật thành công, xem lại thông
                  tin.
                  <img
                    src="images/end-upd-provider.png"
                    alt="overview"
                    style={{ width: "100%" }}
                  ></img>
                </p>
              </div>
              <div className="deleteProvider">
                <strong>2.3. Xóa nhà cung cấp (chỉ dành cho Admin)</strong>
                <p>
                  <strong>Bước 1:</strong>Tích chọn vào những nhà cung cấp cần
                  xóa <strong>(có thể xóa nhiều nha cung cấp)</strong>. Sau đó
                  bấm nút Xóa, hệ thống sẽ hiển thị thông báo:
                </p>
                <img
                  src="images/addProvider.png"
                  alt="overview"
                  style={{ width: "100%" }}
                ></img>
                <p>
                  <strong>Bước 2: </strong>Nhấn có để xác nhận xóa.
                  <img
                    src="images/step-2-del-provider.png"
                    alt="overview"
                    style={{ width: "100%" }}
                  ></img>
                </p>
                <p>
                  <strong>Bước 3: </strong>Nếu xóa thành công hệ thống sẽ cập
                  nhật lại danh sách nhà cung cấp.
                  <img
                    src="images/addProvider.png"
                    alt="overview"
                    style={{ width: "100%" }}
                  ></img>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Provider;
