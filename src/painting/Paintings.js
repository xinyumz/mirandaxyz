import React from "react";
import paintingStyles from "./Paintings.module.css";
import { Helmet } from "react-helmet";
import { Header } from "../App";
import Earth from "./paintings/TheEarth.jpg";
import Aco from "./paintings/Aco.png";
import UnderTree from "./paintings/UnderTheTree.png";
import SnowMountain from "./paintings/SnowyMountains.png";
import CanolaField from "./paintings/CanolaFlowerField.png";
import Starlight from "./paintings/StarlightNight.png";
import Lake from "./paintings/TheLake.png";
import Sea from "./paintings/TheSea.png";
import Valley from "./paintings/TheValley.png";
import Village from "./paintings/TheVillage.png";
import Kiwi from "./paintings/Kiwi.jpg";
import CarTower from "./paintings/CameroonTower.jpg";
import Meow from "./paintings/Meow.jpg";

export default function Paintings() {
  return (
    <div>
      <Helmet>
        <title>Paintings | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />

      <div className={paintingStyles.paintPage}>
        <div className={paintingStyles.paintContent}>
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
