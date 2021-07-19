import React from "react";
import "./App.css";
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

function Header() {
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

class ResumeItem extends React.Component {
  render() {
    return (
      <div class="list">
        <h3 class="li-title container">
          <span
            dangerouslySetInnerHTML={{ __html: this.props.item.title }}
          ></span>
          <span>{this.props.item.date}</span>
        </h3>
        <div>
          {this.props.item.descs.map((desc, index) => (
            <span key={index} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
        </div>
      </div>
    );
  }
}

class CV extends React.Component {
  constructor() {
    super();
    this.state = {
      resumeItems: [
        {
          title: "<span>Li(Na)<sub>x</sub>SiON Polymer Precursors</span>",
          date: "Jan. 2020 - Jun. 2021",
          descs: [
            "Syntheses and characterization of Li<sub>x</sub>SiON and Na<sub>x</sub>SiON polymer precursors as solid electrolytes derived from agricultural waste, rice hull ash, towards all solid-state batteries (ASSBs).",
          ],
        },
        {
          title: "<span>Li<sub>x</sub>PON-like Polymer Precursors</span>",
          date: "Sep. 2017 - Jun. 2021",
          descs: [
            "Syntheses and characterization of Li<sub>x</sub>PON-like polymer precursors as solid electrolytes towards ASSBs. Precursor systems include Li<sub>x</sub>PON, Li<sub>x</sub>SiPON and Li<sub>x</sub>SiPHN.",
          ],
        },
        {
          title: "<span>Oxysilylation of Diepoxides</span>",
          date: "Aug. 2017 - Dec. 2019",
          descs: [
            "Syntheses and characterization of hybrid materials with nano-sized struc-tures and their derivatives, a novel approach towards epoxy resins.",
          ],
        },
        {
          title: "<span>Toughened Alumina (ZTA) Films and Coatings</span>",
          date: "Aug. 2018 - Feb. 2019",
          descs: [
            "Sintering of ZTA thin (~40  &#x3BCm) and thick (~200  &#x3BCm) films from nanopow-erders by liquid-feed flame spray pyrolysis; coating of ZTA thin films (< 5  &#x3BCm) on Si3N4 (~300  &#x3BCm) and AlN (~600  &#x3BCm) substrates as a protective reinforce-ment layer for power electronic applications.",
          ],
        },
      ],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Helmet>
          <title>CV | Xinyu (Miranda) Zhang</title>
        </Helmet>
        <Header />
        <div class="page">
          <div class="CV">
            <div>
              <h1 class="CV-title">Xinyu (Miranda) Zhang</h1>
            </div>
            <hr />
            <div class="email-pad">
              xinyumz@umich.edu; mirandazxy@outlook.com
            </div>
            <div class="sec">
              <h2 class="sec-title">Education</h2>
              <div class="list">
                <h3 class="li-title container">
                  <span>
                    University of Michigan,{" "}
                    <span class="nonbold">Ann Arbor, MI</span>
                  </span>
                  <span>Sep. 2018 - Jun.2021</span>
                </h3>
                <div>
                  <strong>PhD in Materials Science and Engineering</strong>
                </div>
                <div>
                  <em>GPA:</em> 4.0/4.0
                </div>
              </div>
              <div class="list">
                <h3 class="li-title container">
                  <span>
                    University of Michigan,{" "}
                    <span class="nonbold">Ann Arbor, MI</span>
                  </span>
                  <span>Sep. 2016 - Apr. 2018</span>{" "}
                </h3>
                <div>
                  <strong>Masters in Materials Science and Engineering</strong>
                </div>
                <div>
                  <em>GPA:</em> 3.95/4.0
                </div>
              </div>
              <div class="list">
                <h3 class="li-title container">
                  <span>
                    Harbin Institute of Technology,{" "}
                    <span class="nonbold">Harbin, China</span>
                  </span>
                  <span>Sep. 2012 - July. 2016</span>
                </h3>
                <div>
                  <strong>B.S. in Materials Science and Engineering</strong>
                </div>
                <div>
                  <em>GPA:</em> 3.72/4.0; People's Scholarship 2012-2014
                </div>
                <div>
                  <em>Standardized Tests: </em>{" "}
                  <span>GRE: 322 (V155 + Q170) +AW3.5; </span>
                  <span>TOEFL: 101 (27 + 25 + 22 + 27)</span>
                </div>
              </div>
            </div>
            <div class="sec">
              <h2 class="sec-title">Experience</h2>

              <div class="list">
                <h3 class="li-title container">
                  <span>
                    University of Michigan,{" "}
                    <span class="nonbold">Ann Arbor, MI</span>
                  </span>
                </h3>
                <h3 class="li-title container">
                  {" "}
                  <span>Laine lab</span>
                  <span>Sep. 2016 - Jun.2021</span>
                </h3>
                <div>
                  {" "}
                  <em>
                    Supervisor: Prof. Richard M. Laine (University of Michigan)
                  </em>
                </div>
              </div>
              {this.state.resumeItems.map((item, index) => (
                <ResumeItem key={index} item={item} />
              ))}
            </div>
            <div class="sec">
              <h2 class="sec-title">Intership</h2>
              <div class="list">
                <h3 class="li-title2">
                  Harbin Measuring & Cutting Tool Group, FAW Group Corp., Harbin
                  Turbine Co. Ltd.
                </h3>
                <h3 class="li-title container-r">Sep. 2015</h3>
                <ul>
                  <li>
                    Learned heat treatment technology and vacuum heat treatment
                    equipment for alloy and high-speed steels.
                  </li>
                  <li>
                    Visited workshop assembly lines, familiarized working
                    environment and procedures of manufacture work-shop,
                    assembly shop, shaft gear center, gearbox center, welding
                    workshop, etc.
                  </li>
                </ul>
              </div>
            </div>
            <div class="sec">
              <h2 class="sec-title">Extracurricular Activities</h2>
              <div class="list">
                <h3 class="li-title container">
                  <span>
                    Rackham Student Government,{" "}
                    <span class="nonbold">University of Michigan</span>
                  </span>
                  <span>May. 2017 - Sep. 2017</span>
                </h3>
                <div>
                  <strong>Position: Board Member</strong>
                </div>
                <ul>
                  <li>
                    Board member on student life and communication committees.
                  </li>
                  <li>Participated in organizing student events.</li>
                </ul>
              </div>
              <div class="list">
                <h3 class="li-title container">
                  <span>
                    Stamp Nation: United by Music,{" "}
                    <span class="nonbold">University of Michigan</span>
                  </span>
                  <span>Sep. 2016 - Sep. 2017</span>
                </h3>
                <div>
                  <strong>Position: Executive Member</strong>
                </div>
                <ul>
                  <li>
                    Organized music career & entrepreneurship workshop:{" "}
                    <em>Innovate Music.</em>
                  </li>
                  <li>
                    Co-organized student activities on campus:{" "}
                    <em>Concert on the Diag.</em>
                  </li>
                </ul>
              </div>
              <div class="list">
                <h3 class="li-title container">
                  <span>
                    Society of Women Engineers, Graduate Division,{" "}
                    <span class="nonbold">University of Michigan</span>
                  </span>
                  <span>Sep. 2016 - Apr. 2017</span>
                </h3>
                <div>
                  <strong>Position: Active Member</strong>
                </div>
                <ul>
                  <li>Volunteered in organization of career fair events.</li>
                  <li>
                    Contributed efforts in promoting communication of students
                    on academic matters.
                  </li>
                </ul>
              </div>
              <div class="list">
                <h3 class="li-title container">
                  <span>
                    MADIBA CAMEROON 2014,{" "}
                    <span class="nonbold">Bangoua, Cameroon</span>
                  </span>
                  <span>Jul. 2014 - Aug. 2014</span>
                </h3>
                <div>
                  <strong>Position: Volunteer</strong>
                </div>
                <ul>
                  <li>
                    Taught young students from rural areas in Cameroon basic
                    Chinese and English.
                  </li>
                  <li>
                    Promoted knowledge and education on hygiene and healthcare.
                  </li>
                  <li>
                    Organized and participated events for culture exchange in
                    rural towns and villages.
                  </li>
                </ul>
              </div>
            </div>
            <div class="sec list">
              <h2 class="sec-title">Skills & Interests</h2>
              <ul>
                <li>
                  Native speaker of Chinese (Mandarin), fluent in English.
                </li>
                <li>
                  Proficient in Python, MATLAB, C++, AutoCAD, ChemDraw, Origin,
                  Microsoft Office Software.
                </li>
                <li>
                  <span>Amateur musician of piano, guitar, and ukulele; </span>{" "}
                  <span>amateur painter. </span>
                </li>
              </ul>
            </div>
            <div class="sec list">
              <h2 class="sec-title">Publications</h2>
              <ol class="pub">
                <li>
                  Zhang, X.; Temeche, E.; Laine, R. M. Polymer Precursor Li
                  <sub>x</sub>SiON Derived from Agricultural Waste. Towards All
                  Solid-State Batteries (ASBs), 2020.
                </li>
                <li>
                  Zhang, X.; Cheng, X.; Jansohn, M.; Niedermaier, M.; Lenk, T.;
                  Schmidt, K.; Laine, R. M. ZrO<sub>2</sub> Toughened Al
                  <sub>2</sub>O<sub>3</sub> Self-Standing Films and Coatings for
                  Power Electronic Substrates via Colloidal Processing of Flame
                  Made Nanopowders, 2020.
                </li>
                <li>
                  <a
                    href="https://pubs.acs.org/doi/10.1021/acsami.0c06196"
                    target="_blank"
                  >
                    Temeche, E.; Zhang, X.; Richard, M. L. Solid Electrolytes
                    for Li-S Batteries. Solid Solutions of Polyethylene Oxide
                    with Li<sub>x</sub>PON and Li<sub>x</sub>SiPON Based
                    Polymers. ACS Appl. Mater. Interfaces <strong>2020</strong>,{" "}
                    <em>xx</em> (xx), xxxx.
                  </a>
                </li>
                <li>
                  <a
                    href="https://doi.org/10.1021/acsami.0c03341"
                    target="_blank"
                  >
                    Temeche, E.; Zhang, X.; Laine, R. M. Polymer Precursor
                    Derived Li<sub>x</sub>PON Electrolytes: Toward Li-S
                    Batteries. ACS Appl. Mater. Interfaces <strong>2020</strong>
                    , <em>12</em> (18), 20548-20562.
                  </a>{" "}
                </li>
                <li>
                  <a
                    href="https://doi.org/10.1021/acs.macromol.0c00254"
                    target="_blank"
                  >
                    Zhang, X.; Temeche, E.; Laine, R. M. Design, Synthesis, and
                    Characterization of Polymer Precursors to Li<sub>x</sub>PON
                    and Li<sub>x</sub>SiPON Glasses: Materials That Enable
                    All-Solid-State Batteries (ASBs). Macromolecules{" "}
                    <strong>2020</strong>, <em>53</em> (7), 2702-2712.
                  </a>
                </li>
                <li>
                  <a
                    href="https://doi.org/10.1021/acs.macromol.9b02676"
                    target="_blank"
                  >
                    Zhang, X.; Yu, M.; Laine, R. M. An Approach to Epoxy Resins:
                    Oxysilylation of Epoxides. Macromolecules{" "}
                    <strong>2020</strong>, <em>53</em> (6), 2249-2263.
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
