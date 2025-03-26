import React, { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showGuideMenu, setShowGuideMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img
          src="https://baotech.vn/static/media/LOGO.b05b3f52fd502d6be201.png"
          alt="BICRAFT"
        />
      </div>
      <div className={styles.navbar__left}>
        <ul className={styles.navbar__menu}>
          <li
            className={styles.navbar__item}
            style={{ position: "relative" }}
            onClick={() => setShowGuideMenu(!showGuideMenu)}
          >
            Hướng dẫn theo chức năng <span>▼</span>
            {showGuideMenu && (
              <ul className={styles.dropdown}>
                <li>
                  <Link
                    to={"/nhacungcap"}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Nhà cung cấp
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to={"/nhapkho"}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Quản lý kho
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to={"/quytien"}
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Quỹ tiền
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className={styles.navbar__item}>
            Video <span>▼</span>
          </li>
          <li className={styles.navbar__item}>
            Tính năng mới <span>▼</span>
          </li>
          <li className={styles.navbar__item}>
            Kênh hỗ trợ <span>▼</span>
          </li>
        </ul>
        <div className={styles.navbar__search}>
          <input type="text" placeholder="Nội dung tìm kiếm" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
