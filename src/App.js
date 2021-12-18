import React from "react";
import "./App.css";
import Paintings from "./Paintings";
import CV from "./resume/CV";
import Overview from "./research/Overview";
import PolymerSyntheses from "./research/PolymerSyntheses";
import Oxysilylation from "./research/Oxysilylation";
import NovelSSEs from "./research/NovelSSEs";
import MHMDS from "./research/MHMDS";
import Ceramics from "./research/Ceramics";
import PublicationLS from "./research/PublicationLS";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={FrontPage} exact />
        <Route exact path="/research" component={Overview} />
        <Route
          exact
          path="/research/polymer_syntheses"
          component={PolymerSyntheses}
        />
        <Route
          exact
          path="/research/polymer_syntheses/oxysilylation"
          component={Oxysilylation}
        />
        <Route
          exact
          path="/research/polymer_syntheses/novel_sses"
          component={NovelSSEs}
        />
        <Route
          exact
          path="/research/polymer_syntheses/m_hmds"
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
        <span>
          <strong> CONTACT </strong>
        </span>
      </span>
    </div>
  );
}

function FrontPage() {
  return (
    <div>
      <Helmet>
        <title>Welcome | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div className="page">
        <div className="frontblock">
          <div className="welcome">
            <strong>WELCOME!</strong>
          </div>
          <div>I am</div>
          <div className="name-back">
            <div className="name">
              <strong>Xinyu Zhang</strong>
              <span className="name-cn">
                <strong> | 张馨予</strong>
              </span>
            </div>
          </div>
          <div>or you can call me</div>
          <div className="name2">
            <em>
              <strong> Miranda</strong>
            </em>
          </div>
          <div className="selfintro">
            PhD in Materials Sci & Eng, University of Michigan | Amateur
            musician, composer, and painter
          </div>
        </div>
        <Projectblock />
      </div>
    </div>
  );
}

function Projectblock() {
  return (
    <div className="pro-block">
      <div className="pro-title">
        <strong>PROJECTS</strong>
      </div>
      <div className="pro-box">
        <div className="pro-res">
          <div className="pro-item">
            <Link to="/research">
              <strong>
                Research
                <br />
                Projects
              </strong>
            </Link>
          </div>
        </div>
        <div className="pro-comp">
          <div className="pro-item">
            <Link to="/compositions">
              <strong>Compositions</strong>
            </Link>
          </div>
        </div>
        <div className="pro-paint">
          <div className="pro-item">
            <Link to="/paintings">
              <strong>Paintings</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Composition() {
  return (
    <div>
      <Helmet>
        <title>Compositions | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div className="page">
        <div className="comp-page"></div>
      </div>
    </div>
  );
}

export default App;
