import React from "react";
import researchStyles from "./Research.module.css";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
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
        <div className={researchStyles.researchPG}>
          <Sidebar />
          <Overview />
        </div>
      </div>
    </div>
  );
}
