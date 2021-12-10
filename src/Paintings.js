import React from "react";
import paintingStyles from "./Paintings.module.css";
import { Helmet } from "react-helmet";
import { Header } from "./App";
import Earth from "./images/TheEarth.jpg";
import Aco from "./images/Aco.png";
import UnderTree from "./images/UnderTheTree.png";
import SnowMountain from "./images/SnowyMountains.png";
import CanolaField from "./images/CanolaFlowerField.png";
import Starlight from "./images/StarlightNight.png";
import Lake from "./images/TheLake.png";
import Sea from "./images/TheSea.png";
import Valley from "./images/TheValley.png";
import Village from "./images/TheVillage.png";
import Kiwi from "./images/Kiwi.jpg";
import CarTower from "./images/CameroonTower.jpg";
import Meow from "./images/Meow.jpg";

export default function Paintings() {
  return (
    <div>
      <Helmet>
        <title>Paintings | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div className="page">
        <div className={paintingStyles.paintPage}>
          <div className={paintingStyles.paintRow}>
            <img className={paintingStyles.paintLong} src={Village} />
            <img className={paintingStyles.paintLong} src={Valley} />
            <img className={paintingStyles.paintLong} src={Sea} />
          </div>
          <div className={paintingStyles.paintRow}>
            <img className={paintingStyles.paintWide} src={Lake} />
            <img className={paintingStyles.paintWide} src={Earth} />
          </div>
          <div className={paintingStyles.paintRow}>
            <img className={paintingStyles.paintWide} src={Aco} />
            <img className={paintingStyles.paintWide} src={SnowMountain} />
          </div>
          <div className={paintingStyles.paintRow}>
            <img className={paintingStyles.paintLong} src={Starlight} />
            <img className={paintingStyles.paintLong} src={CanolaField} />
            <img className={paintingStyles.paintWide} src={UnderTree} />
          </div>
          <div className={paintingStyles.paintRow}>
            <img className={paintingStyles.paintLong} src={Kiwi} />
            <img className={paintingStyles.paintLong} src={CarTower} />
            <img className={paintingStyles.paintLong} src={Meow} />
          </div>
        </div>
      </div>
    </div>
  );
}
