import React from "react";
import "./App.css";
import FrontPage from "./FrontPage";
import Paintings from "./painting/Paintings";
import CV from "./resume/CV";
import Composition from "./music/Composition";
import Overview from "./research/Overview";
import PolymerSyntheses from "./research/PolymerSyntheses";
import Oxysilylation from "./research/Oxysilylation";
import NovelSSEs from "./research/NovelSSEs";
import LiXPON from "./research/LiXPON";
import LiSiON from "./research/LiSiON";
import NextSteps from "./research/NextSteps";
import MHMDS from "./research/MHMDS";
import Ceramics from "./research/Ceramics";
import PublicationLS from "./research/PublicationLS";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={FrontPage} exact />
        <Route exact path="/research" component={Overview} />
        <Route
          exact
          path="/research/polymer-syntheses"
          component={PolymerSyntheses}
        />
        <Route
          exact
          path="/research/polymer-syntheses/oxysilylation"
          component={Oxysilylation}
        />
        <Route
          exact
          path="/research/polymer-syntheses/novel-sses"
          component={NovelSSEs}
        />
        <Route
          exact
          path="/research/polymer-syntheses/novel-sses/lipon"
          component={LiXPON}
        />
        <Route
          exact
          path="/research/polymer-syntheses/novel-sses/lision"
          component={LiSiON}
        />
        <Route
          exact
          path="/research/polymer-syntheses/novel-sses/next-steps"
          component={NextSteps}
        />
        <Route
          exact
          path="/research/polymer-syntheses/m-hmds"
          component={MHMDS}
        />
        <Route exact path="/research/ceramics" component={Ceramics} />
        <Route exact path="/research/publications" component={PublicationLS} />
        <Route path="/compositions" component={Composition} />
        <Route path="/paintings" component={Paintings} />
        <Route path="/resume" component={CV} />
      </Switch>
    </div>
  );
}

export function Header() {
  return (
    <div className="header">
      <span className="header-name">
        <Link to="/">
          <strong>Xinyu (Miranda) Zhang</strong>
        </Link>
      </span>
      <span className="header-nav">
        <span>
          <Link to="/research">
            <strong> RESEARCH PROJECTS </strong>
          </Link>
        </span>
        <span>
          <Link to="/compositions">
            <strong> COMPOSITIONS </strong>
          </Link>
        </span>
        <span>
          <Link to="/paintings">
            <strong> PAINTINGS </strong>
          </Link>
        </span>
        <span>
          <Link to="/resume">
            <strong> RESUME </strong>
          </Link>
        </span>
      </span>
    </div>
  );
}

export default App;
