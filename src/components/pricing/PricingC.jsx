import React from "react";
import styles from "./pricing.module.css";
import cancelImg from "../../images/cancel.svg";
import pricingIcon from "../../images/pricingPlan.svg";
import FreeCard from "../cards/freeCard/FreeCard";
import PremiumCard from "../cards/premiumCard/PremiumCard";

const PricingC = () => {
  return (
    <div className={`${styles.pricing}`}>
      <div className="d-flex justify-content-end">
        <img className={styles.cancelImg} src={cancelImg} alt="" />
      </div>
      <div className={styles.headline}>
        <img src={pricingIcon} alt="" />
        <h1>Pricing Plan</h1>
      </div>
      <div className={styles.cards}>
        <FreeCard />
        <PremiumCard />
      </div>
    </div>
  );
};

export default PricingC;
