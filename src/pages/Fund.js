import React from "react";
import styles from "../styles/Fund.module.scss";

const Fund = () => {
  return (
    <div className={styles.fund}>
      <div className={styles.fund__container}>
        <div>
          <h2 className={styles.fund__title}>Tổng quan về quỹ tiền</h2>
          <p className={styles.fund__description}>
            Hướng dẫn sử dụng chức năng về quỹ tiền
          </p>
        </div>

        <div className={styles.fund__content}>
          <div className={styles.fund__section}>
            <strong className={styles.fund__sectionTitle}>
              Thông tin quỹ tiền
            </strong>
            <p className={styles.fund__sectionDescription}>
              Giúp quản lý cửa hàng có thể xem tổng quan quỹ tiền (theo dõi thu
              chi tiền mặt, thu chi tiền gửi) tại cửa hàng theo nhiều tiêu chí
              khác nhau.
            </p>
            <ul className={styles.fund__list}>
              <li className={styles.fund__item}>Ngày</li>
              <li className={styles.fund__item}>Số chứng từ</li>
              <li className={styles.fund__item}>Loại chứng từ</li>
              <li className={styles.fund__item}>Tổng tiền</li>
              <li className={styles.fund__item}>Đối tượng</li>
              <li className={styles.fund__item}>Lý do</li>
            </ul>
            <img
              className={styles.fund__image}
              src="images/fund.png"
              alt="quỹ tiền"
            />
            <p className={styles.fund__sectionDescription}>
              Xem thông tin chi tiết quỹ tiền.
            </p>
            <ul className={styles.fund__list}>
              <li className={styles.fund__item}>Diễn giải</li>
              <li className={styles.fund__item}>Số tiền</li>
              <li className={styles.fund__item}>Mục thu/chi</li>
            </ul>
          </div>

          {/* Các bước thực hiện */}
          <div className={styles.fund__section}>
            <strong className={styles.fund__stepsTitle}>
              2. Các bước thực hiện
            </strong>
            <p className={styles.fund__stepsDescription}>
              Tại màn hình Quỹ tiền, phần mềm hiển thị danh sách quỹ tiền theo
              bảng.
            </p>
            <img
              className={styles.fund__image}
              src="images/fund.png"
              alt="Danh sách quỹ tiền"
            />

            {/* Thêm quỹ tiền */}
            <div className={styles.fund__step}>
              <strong className={styles.fund__stepTitle}>
                2.1. Thêm quỹ tiền
              </strong>
              <p>
                <strong>Bước 1:</strong> Bấm nút thêm quỹ tiền. Chọn phiếu thu
                tiền hoặc phiếu chi tiền
              </p>
              <img
                className={styles.fund__image}
                src="images/addfund.png"
                alt="Thêm quỹ tiền"
              />

              <p>
                <strong>Bước 2:</strong> Nhập thông tin bắt buộc.
              </p>
              <ul className={styles.fund__list}>
                <li className={styles.fund__item}>
                  <strong>Chọn thêm loại chứng từ, sau đó nhấn thêm</strong>
                  <img
                    className={styles.fund__image}
                    src="images/fund-add-step-2.png"
                    alt="Thêm quỹ tiền"
                  />
                </li>
                <li className={styles.fund__item}>
                  <strong>Chọn thêm đối tượng, sau đó nhấn thêm</strong>
                  <img
                    className={styles.fund__image}
                    src="images/fund-add-step-3.png"
                    alt="Thêm quỹ tiền"
                  />
                </li>
                <li className={styles.fund__item}>
                  <strong>Chọn thêm mục thu/chi, sau đó nhấn thêm</strong>
                  <img
                    className={styles.fund__image}
                    src="images/fund-add-step-4.png"
                    alt="Thêm quỹ tiền"
                  />
                </li>
              </ul>

              <p>
                <strong>Bước 3:</strong> Nhấn nút thêm tiền thu.
              </p>
              <img
                className={styles.fund__image}
                src="images/fund-add-end.png"
                alt="Xác nhận thêm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fund;
