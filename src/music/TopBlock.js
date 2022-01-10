import React from "react";
import compositionStyles from "./Composition.module.css";
import Cover from "../images/CompCover.png";

export default function TopBlock() {
  return (
    <div className={compositionStyles.topBlock}>
      <img src={Cover} className={compositionStyles.coverImg} />
      <div>
        <div className={compositionStyles.introTitle}>My Compositions</div>
        <div className={compositionStyles.introText}>PIANO DEMOS</div>
      </div>
    </div>
  );
}
