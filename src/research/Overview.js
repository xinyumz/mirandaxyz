import React from "react";
import Research from "./Research";
import OverviewImg from "../images/ResearchOverviewImage.png";
import researchStyles from "./Research.module.css";

function Overview() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Overview</div>
      <div className={researchStyles.mainText}>
        Lithium-ion batteries (LIBs) have become the most important
        electrochemical storage sys-tem owing to their high energy densities
        (~250 Wh/kg), providing an escape from consumption of fossil fuels.
        However, current LIBs with flammable organic liquid electrolytes suffer
        from poor electrochemical and thermal stabilities that can lead to
        severe thermal runaway accidents. All-solid-state batteries (ASSBs) are
        regarded as a fundamental solution to address the safety issue by
        applying solid-state electrolytes (SSEs). Therefore, we explore novel
        polymeric SSE materials and develop new synthesis methods with low-cost,
        scalable and environmentally friendly features.{" "}
        <img className={researchStyles.image} src={OverviewImg} />
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <Overview />
    </Research>
  );
};
