import React from "react";
import Publications from "../resume/Publications";
import Research from "./Research";
import researchStyles from "./Research.module.css";

function PublicationLS() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Publications</div>
      <div className={researchStyles.publication}>
        <Publications />
      </div>
    </div>
  );
}

export default () => {
  return (
    <Research>
      <PublicationLS />
    </Research>
  );
};
