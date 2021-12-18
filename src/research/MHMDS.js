import React from "react";
import Research from "./Research";
import researchStyles from "./Research.module.css";

function MHMDS() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>M-HMDS</div>
      <div className={researchStyles.mainText}></div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <MHMDS />
    </Research>
  );
};
