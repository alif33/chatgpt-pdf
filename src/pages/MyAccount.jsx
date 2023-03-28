import React from "react";
import AccountChat from "../components/accountChat/AccountChat";
import Footer from "../components/footer/Footer";
import Work from "../components/work/Work";
import "./styles.css";

const MyAccount = () => {
  return (
    <div className="my_account">
      <AccountChat />
      <Work />
      <Footer />
    </div>
  );
};

export default MyAccount;
