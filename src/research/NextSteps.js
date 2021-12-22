import React from "react";
import Research from "./Research";
import researchStyles from "./Research.module.css";

function NextSteps() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Next Steps</div>
      <div className={researchStyles.mainText}></div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <NextSteps />
    </Research>
  );
};
