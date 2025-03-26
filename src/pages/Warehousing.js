import React from "react";
import styles from "../styles/Warehousing.module.scss"; // Import SCSS module

const Warehousing = () => {
  return (
    <div className={styles.warehousing}>
      <div className={styles.warehousing__container}>
        <div className={styles.warehousing__title}>
          <h2>Kho</h2>
          <p>Hướng dẫn sử dụng chức năng về kho</p>
        </div>

        <div className={styles.warehousing__content}>
          {/* Nhập kho */}
          <div className={styles.warehousing__section}>
            <h3 className={styles.warehousing__section_title}>
              1. Tổng quan về nhập kho
            </h3>
            <div className={styles.warehousing__section_description}>
              <p>
                Giúp quản lý cửa hàng có thể xem tổng quan tình hình kho tại cửa
                hàng theo nhiều tiêu chí khác nhau:
              </p>
              <ul className={styles.warehousing__list}>
                <li className={styles.warehousing__item}>Mã lô hàng</li>
                <li className={styles.warehousing__item}>Tên lô hàng</li>
                <li className={styles.warehousing__item}>Ngày nhập</li>
                <li className={styles.warehousing__item}>Tổng tiền</li>
                <li className={styles.warehousing__item}>Số lượng còn lại</li>
              </ul>
              <img
                className={styles.warehousing__image}
                src="images/nhapkho.png"
                alt="Nhập kho"
              />
            </div>

            {/* Thêm lô hàng */}
            <div className={styles.warehousing__step}>
              <h4 className={styles.warehousing__step_title}>
                1.1 Thêm lô hàng
              </h4>
              <p>
                <strong>Bước 1: </strong>Nhấn vào nút thêm lô hàng trên thanh
                bar
              </p>
              <img
                className={styles.warehousing__image}
                src="images/nk-step-1.png"
                alt="Bước 1"
              />
              <p>
                <strong>Bước 2: </strong>Nhập thông tin cần thiết{" "}
                <strong>(Chọn phương thức thanh toán)</strong> Sau đó nhấn nút
                thêm sản phẩm
              </p>
              <img
                className={styles.warehousing__image}
                src="images/nk-step-2.png"
                alt="Bước 2"
              />
              <p>
                <strong>Bước 3: </strong>Nếu thêm thành công, hệ thống sẽ hiển
                thị thông báo.
              </p>
              <img
                className={styles.warehousing__image}
                src="images/nk-step-3.png"
                alt="Bước 3"
              />
            </div>

            {/* Sửa lô hàng */}
            <div className={styles.warehousing__step}>
              <h4 className={styles.warehousing__step_title}>
                1.2 Sửa lô hàng
              </h4>
              <p>
                <strong>Bước 1: </strong>Chọn lô hàng cần sửa, sau đó nhấn vào
                nút sửa lô hàng.
              </p>
              <img
                className={styles.warehousing__image}
                src="images/nk-upd-step-1.png"
                alt="Bước 1"
              />
              <p>
                <strong>Bước 2: </strong>Sửa thông tin cần thiết, sau đó nhấn
                cập nhật.
              </p>
              <img
                className={styles.warehousing__image}
                src="images/nk-upd-step-2.png"
                alt="Bước 2"
              />
              <p>
                <strong>Bước 3: </strong>Nếu cập nhật thành công, hệ thống sẽ
                hiển thị thông báo.
              </p>
              <img
                className={styles.warehousing__image}
                src="images/nk-upd-step-3.png"
                alt="Bước 3"
              />
            </div>
          </div>

          {/* Xuất kho */}
          <div className={styles.warehousing__section}>
            <h3 className={styles.warehousing__section_title}>
              2. Tổng quan về xuất kho
            </h3>
            <p className={styles.warehousing__section_description}>
              Giúp quản lý cửa hàng có thể theo dõi các sản phẩm đã xuất kho
              theo tiêu chí:
            </p>
            <ul className={styles.warehousing__list}>
              <li className={styles.warehousing__item}>Mã lô hàng</li>
              <li className={styles.warehousing__item}>Mã sản phẩm</li>
              <li className={styles.warehousing__item}>Imel</li>
              <li className={styles.warehousing__item}>Tên sản phẩm</li>
              <li className={styles.warehousing__item}>Ngày nhập</li>
              <li className={styles.warehousing__item}>Ngày xuất</li>
            </ul>
            <img
              className={styles.warehousing__image}
              src="images/xuatkho.png"
              alt="Xuất kho"
            />
          </div>

          {/* Lệnh điều chuyển */}
          <div className={styles.warehousing__section}>
            <h3 className={styles.warehousing__section_title}>
              3. Tổng quan về lệnh điều chuyển
            </h3>
            <p className={styles.warehousing__section_description}>
              Giúp quản lý cửa hàng theo dõi lệnh điều chuyển hàng hóa:
            </p>
            <ul className={styles.warehousing__list}>
              <li className={styles.warehousing__item}>Ngày chuyển</li>
              <li className={styles.warehousing__item}>Tên sản phẩm</li>
              <li className={styles.warehousing__item}>Kho chuyển</li>
              <li className={styles.warehousing__item}>Kho nhận</li>
              <li className={styles.warehousing__item}>Lý do</li>
              <li className={styles.warehousing__item}>Số lượng</li>
            </ul>
            <img
              className={styles.warehousing__image}
              src="images/dieuchuyen.png"
              alt="Lệnh điều chuyển"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehousing;
