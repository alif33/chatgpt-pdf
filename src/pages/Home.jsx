import React from "react";
import AiChat from "../components/aiChat/AiChat";
import PricingC from "../components/pricing/PricingC";
import UseCases from "../components/useCases/UseCases";
import Work from "../components/work/Work";

const Home = () => {
  return (
    <div className="">
      <AiChat />
      <Work />
      <UseCases />
      {/* <PricingC /> */}
    </div>
  );
};

export default Home;
