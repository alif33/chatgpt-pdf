import React from "react";
import styles from "./accountChat.module.css";
import pricingIcon from "../../images/pricingPlan.svg";
import discordIcon from "../../images/discord.svg";
import twitterIcon from "../../images/twitter.svg";
import fbIcon from "../../images/fb.svg";
import pdfIcon from "../../images/pdf.svg";
import { Link } from "react-router-dom";

const AccountChat = () => {
  return (
    <div className={styles.account_chat}>
      <div className={styles.header}>
        <img src={pricingIcon} alt="" />
        <span>Chat With Any PDF</span>
      </div>
      <div className={styles.channel}>
        <div className={styles.item1}>
          <img src={discordIcon} alt="" />
          <span>Join Discord</span>
        </div>
        <div className={styles.item2}>
          <img src={twitterIcon} alt="" />
          <span>Post to Twitter</span>
        </div>
        <div className={styles.item1}>
          <img src={fbIcon} alt="" />
          <span>Share on Facebook</span>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={`${styles.left_card}`}>
          <h5>Paste URL</h5>
          <div className="" style={{ marginLeft: "25px", marginTop: "12px" }}>
            <input type="text" placeholder="Paste URL" />
          </div>
          <div className={`${styles.btn}`}>
            <p>Upload</p>
          </div>
          <h5>Find PDF</h5>
          <div className="" style={{ marginLeft: "25px", marginTop: "12px" }}>
            <input type="text" placeholder="Paste URL" />
          </div>
          <div className={`${styles.btn}`}>
            <p>Search</p>
          </div>
        </div>
        <div className={styles.right_card}>
          <div className={styles.card_border} style={{ margin: "25px 25px" }}>
            <div className={styles.content}>
              <img src={pdfIcon} alt="" />
              <span>Drag & Drop Your Question as PDF File</span>
              <p>
                Or <Link to="">Browse Files</Link> on your computer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountChat;
