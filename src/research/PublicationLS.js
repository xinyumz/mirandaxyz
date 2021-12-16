import React from "react";
import { Publications, Patent } from "../resume/Publications";
import Research from "./Research";
import researchStyles from "./Research.module.css";

function PublicationLS() {
  return (
    <div className={researchStyles.contentPG}>
      <div className={researchStyles.title}>Publications</div>
      <div className={researchStyles.publication}>
        <Publications />
      </div>
      <div className={researchStyles.subtitle}>Patent Application</div>
      <div className={researchStyles.mainText}>
        <Patent />
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
