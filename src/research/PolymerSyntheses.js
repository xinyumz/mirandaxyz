import React from "react";
import Research from "./Research";
import researchStyles from "./Research.module.css";

function PolymerSyntheses() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Polymer Syntheses</div>
      <div className={researchStyles.mainText}>This is a place holder</div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <PolymerSyntheses />
    </Research>
  );
};
