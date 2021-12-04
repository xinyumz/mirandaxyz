import React from "react";
import "./App.css";
import CV from "./CV";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
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

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={FrontPage} exact />
        <Route path="/research" component={Research} />
        <Route path="/compositions" component={Composition} />
        <Route path="/paintings" component={Paint} />
        <Route path="/resume" component={CV} />
      </Switch>
    </div>
  );
}

export function Header() {
  return (
    <div class="header">
      <span class="header-name">
        <Link to="/">
          <strong>Xinyu (Miranda) Zhang</strong>
        </Link>
      </span>
      <span class="header-nav">
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
      <div class="page">
        <div class="frontblock">
          <div class="welcome">
            <strong>WELCOME!</strong>
          </div>
          <div>I am</div>
          <div class="name-back">
            <div class="name">
              <strong>Xinyu Zhang</strong>
              <span class="name-cn">
                <strong> | 张馨予</strong>
              </span>
            </div>
          </div>
          <div>or you can call me</div>
          <div class="name2">
            <em>
              <strong> Miranda</strong>
            </em>
          </div>
          <div class="selfintro">
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
    <div class="pro-block">
      <div class="pro-title">
        <strong>PROJECTS</strong>
      </div>
      <div class="pro-box">
        <div class="pro-res">
          <div class="pro-item">
            <Link to="/research">
              <strong>
                Research
                <br />
                Projects
              </strong>
            </Link>
          </div>
        </div>
        <div class="pro-comp">
          <div class="pro-item">
            <Link to="/compositions">
              <strong>Compositions</strong>
            </Link>
          </div>
        </div>
        <div class="pro-paint">
          <div class="pro-item">
            <Link to="/paintings">
              <strong>Paintings</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Research() {
  return (
    <div>
      <Helmet>
        <title>Research Projects | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div class="page">
        <div class="res-front">
          <div class="res-box">
            <div class="LiSiON">
              <div class="res-item">
                Li<sub>x</sub>SiON
              </div>
            </div>
            <div class="LiPON">
              <div class="res-item">
                Li<sub>x</sub>PON
              </div>
            </div>
          </div>
          <div class="res-box">
            <div class="Oxysil">
              <div class="res-item">Oxysilylation</div>
            </div>
            <div class="ZTA">
              <div class="res-item">ZTA ceramics</div>
            </div>
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
      <div class="page">
        <div class="comp-page"></div>
      </div>
    </div>
  );
}

function Paint() {
  return (
    <div>
      <Helmet>
        <title>Paintings | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div class="page">
        <div class="paint-page">
          <div class="paint-row">
            <img class="paint-long" src={Village} />
            <img class="paint-long" src={Valley} />
            <img class="paint-long" src={Sea} />
          </div>
          <div class="paint-row">
            <img class="paint-wide" src={Lake} />
            <img class="paint-wide" src={Earth} />
          </div>
          <div class="paint-row">
            <img class="paint-wide" src={Aco} />
            <img class="paint-wide" src={SnowMountain} />
          </div>
          <div class="paint-row">
            <img class="paint-long" src={Starlight} />
            <img class="paint-long" src={CanolaField} />
            <img class="paint-wide" src={UnderTree} />
          </div>
          <div class="paint-row">
            <img class="paint-long" src={Kiwi} />
            <img class="paint-long" src={CarTower} />
            <img class="paint-long" src={Meow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
