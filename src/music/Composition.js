import React from "react";
import compositionStyles from "./Composition.module.css";
import { Helmet } from "react-helmet";
import Header from "../Header";
import TopBlock from "./TopBlock";
import TrackPlayer from "./player/TrackPlayer";

export default function Composition() {
  return (
    <div>
      <Helmet>
        <title>Compositions | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div
        className={compositionStyles.compPG}
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <TopBlock />
        <TrackPlayer />
      </div>
    </div>
  );
}
