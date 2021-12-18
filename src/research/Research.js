import React from "react";
import researchStyles from "./Research.module.css";
import Sidebar from "./Sidebar";
import sidebarStyles from "./Sidebar.module.css";
import { Helmet } from "react-helmet";
import { Header } from "../App";

export default function Research({ ...props }) {
  return (
    <div>
      <Helmet>
        <title>Research Projects | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div className="page">
        <div className={researchStyles.researchPG}>
          <div className={sidebarStyles.sidebarContainer}>
            <Sidebar />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
}
