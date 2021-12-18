import React from "react";
import Research from "./Research";
import researchStyles from "./Research.module.css";

function SSEs() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>
        Polymer Precursor Derived Novel Solid Electrolytes
      </div>
      <div className={researchStyles.mainText}></div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <SSEs />
    </Research>
  );
};
