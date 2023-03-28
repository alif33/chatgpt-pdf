import React from "react";
import AiChat from "../components/aiChat/AiChat";
import Footer from "../components/footer/Footer";
import PricingC from "../components/pricing/PricingC";
import UseCases from "../components/useCases/UseCases";
import Work from "../components/work/Work";

const Home = () => {
  return (
    <div className="">
      <AiChat />
      <Work />
      <UseCases />
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ marginTop: "100px" }}
      >
        <PricingC />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
