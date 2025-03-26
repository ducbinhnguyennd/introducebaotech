import React from "react";
import styles from "../styles/Provider.module.scss";

const Provider = () => {
  return (
    <div className={styles.provider}>
      <div className={styles.provider__container}>
        <div>
          <h2 className={styles.provider__title}>Tổng quan về nhà cung cấp</h2>
          <p className={styles.provider__description}>
            Hướng dẫn sử dụng chức năng về nhà cung cấp
          </p>
        </div>

        <div className={styles.provider__content}>
          <div className={styles.provider__section}>
            <strong className={styles.provider__sectionTitle}>
              1. Nhà cung cấp
            </strong>
            <p className={styles.provider__sectionDescription}>
              Giúp quản lý cửa hàng có thể xem tổng quan tình hình kinh doanh
              tại cửa hàng theo nhiều tiêu chí khác nhau.
            </p>
            <img
              className={styles.provider__image}
              src="images/provider.png"
              alt="Nhà cung cấp"
            />
          </div>

          {/* Các bước thực hiện */}
          <div className={styles.provider__section}>
            <strong className={styles.provider__stepsTitle}>
              2. Các bước thực hiện
            </strong>
            <p className={styles.provider__stepsDescription}>
              Tại màn hình Nhà cung cấp, phần mềm hiển thị danh sách các nhà
              cung cấp theo bảng.
            </p>
            <img
              className={styles.provider__image}
              src="images/provider.png"
              alt="Danh sách nhà cung cấp"
            />

            {/* Thêm nhà cung cấp */}
            <div className={styles.provider__step}>
              <strong className={styles.provider__stepTitle}>
                2.1. Thêm nhà cung cấp
              </strong>
              <p>
                <strong>Bước 1:</strong> Bấm nút thêm nhà cung cấp.
              </p>
              <img
                className={styles.provider__image}
                src="images/addProvider.png"
                alt="Thêm nhà cung cấp"
              />

              <p>
                <strong>Bước 2:</strong> Nhập thông tin bắt buộc.
              </p>
              <img
                className={styles.provider__image}
                src="images/step-2-add-provider.png"
                alt="Nhập thông tin"
              />

              <p>
                <strong>Bước 3:</strong> Nhấn nút thêm nhà cung cấp.
              </p>
              <img
                className={styles.provider__image}
                src="images/step-3-add-provider.png"
                alt="Xác nhận thêm"
              />
            </div>

            {/* Sửa nhà cung cấp */}
            <div className={styles.provider__step}>
              <strong className={styles.provider__stepTitle}>
                2.2. Sửa thông tin nhà cung cấp
              </strong>
              <p>
                <strong>Bước 1:</strong> Chọn một nhà cung cấp và bấm sửa.
              </p>
              <img
                className={styles.provider__image}
                src="images/addProvider.png"
                alt="Chọn nhà cung cấp"
              />

              <p>
                <strong>Bước 2:</strong> Cập nhật thông tin.
              </p>
              <img
                className={styles.provider__image}
                src="images/step-2-upd-provider.png"
                alt="Cập nhật thông tin"
              />

              <p>
                <strong>Bước 3:</strong> Nhấn cập nhật để lưu.
              </p>
              <img
                className={styles.provider__image}
                src="images/step-3-upd-provider.png"
                alt="Lưu thay đổi"
              />
            </div>

            {/* Xóa nhà cung cấp */}
            <div className={styles.provider__step}>
              <strong className={styles.provider__stepTitle}>
                2.3. Xóa nhà cung cấp (Admin)
              </strong>
              <p>
                <strong>Bước 1:</strong> Chọn nhà cung cấp cần xóa.
              </p>
              <img
                className={styles.provider__image}
                src="images/addProvider.png"
                alt="Chọn nhà cung cấp để xóa"
              />

              <p>
                <strong>Bước 2:</strong> Xác nhận xóa.
              </p>
              <img
                className={styles.provider__image}
                src="images/step-2-del-provider.png"
                alt="Xác nhận xóa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;
