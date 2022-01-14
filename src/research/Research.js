import React, { useState } from "react";
import researchStyles from "./Research.module.css";
import Sidebar from "./Sidebar";
import { Helmet } from "react-helmet";
import { Header } from "../App";

export default function Research({ ...props }) {
  const [toggled, setToggled] = useState(false);
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <Helmet>
        <title>Research Projects | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div className={researchStyles.researchPG}>
        <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
        {props.children}
      </div>
    </div>
  );
}
