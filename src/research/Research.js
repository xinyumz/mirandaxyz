import React from "react";
import researchStyles from "./Research.module.css";
import { Helmet } from "react-helmet";
import { Header } from "../App";

export default function Research() {
  return (
    <div>
      <Helmet>
        <title>Research Projects | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div className="page">
        <div className={researchStyles.resFront}>
          <div className={researchStyles.resBox}>
            <div className={researchStyles.LiSiON}>
              <div className={researchStyles.resItem}>
                Li<sub>x</sub>SiON
              </div>
            </div>
            <div className={researchStyles.LiPON}>
              <div className={researchStyles.resItem}>
                Li<sub>x</sub>PON
              </div>
            </div>
          </div>
          <div className={researchStyles.resBox}>
            <div className={researchStyles.Oxysil}>
              <div className={researchStyles.resItem}>Oxysilylation</div>
            </div>
            <div className={researchStyles.ZTA}>
              <div className={researchStyles.resItem}>ZTA ceramics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
