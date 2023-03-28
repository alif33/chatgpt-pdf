import React from "react";
import styles from "./footer.module.css";
import logo from "../../images/Group.svg";

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.left_side}`}>
        <img src={logo} alt="" />
        <h5>Logo here</h5>
      </div>
      <div className={styles.right_side}>
        <ul>
          <li>Features</li>
          <li>Explain the process</li>
          <li>Plans</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
