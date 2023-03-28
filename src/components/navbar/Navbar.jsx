import React from "react";
import styles from "./navbar.module.css";
import englishImg from "../../images/english.svg";
import vectorIcon from "../../images/Vector.svg";
import logo from "../../images/Group.svg";

const Navbar = () => {
  return (
    <div
      className={`container d-flex justify-content-between align-items-center ${styles.navbar}`}
    >
      <div
        className={`${styles.nav_left} d-flex justify-content-center align-items-center`}
      >
        <img src={logo} alt="" />
        <h5>Logo here</h5>
      </div>
      <div className={styles.nav_middle}>
        <ul>
          <li>Features</li>
          <li>Explain the process</li>
          <li>Plans</li>
        </ul>
      </div>
      <div
        className={`${styles.nav_right} d-flex justify-content-center align-items-center`}
      >
        <div className={styles.right_img}>
          <img src={englishImg} alt="" />
          <img src={vectorIcon} alt="" />
        </div>
        <h5>Sign Up</h5>
        <span>Log in</span>
      </div>
    </div>
  );
};

export default Navbar;
