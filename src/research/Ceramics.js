import React from "react";
import Research from "./Research";
import researchStyles from "./Research.module.css";

function Ceramics() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Ceramic Processing</div>
      <div className={researchStyles.mainText}></div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <Ceramics />
    </Research>
  );
};
