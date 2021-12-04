import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "./App";
import { defaultResumeObj, experienceItems } from "./ResumeObjects";

class ResumeItem extends React.Component {
  render() {
    return (
      <div className="list">
        <h4 className="li-title container">
          <span
            dangerouslySetInnerHTML={{ __html: this.props.item.title }}
          ></span>
          <span>{this.props.item.date}</span>
        </h4>
        <span
          dangerouslySetInnerHTML={{ __html: this.props.item.descs }}
        ></span>
      </div>
    );
  }
}

class ResearchPosition extends React.Component {
  render() {
    return (
      <div className="list">
        <h3 className="li-title container">
          <span> {this.props.item.title} </span>
          <span>{this.props.item.date}</span>
        </h3>
      </div>
    );
  }
}

class Department extends React.Component {
  render() {
    return (
      <div>
        <h3 className="li-title container">{this.props.department.title}</h3>
        <div className="date">{this.props.department.date}</div>
        <div>
          {" "}
          <em>{this.props.department.supervisor}</em>
        </div>

        {this.props.department.positions.map((item, index) => (
          <ResearchPosition key={index} item={item} />
        ))}

        {this.props.department.resumeItems.map((item, index) => (
          <ResumeItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

class Experience extends React.Component {
  render() {
    return (
      <div className="list">
        <h3 className="li-title container">
          <span>
            {this.props.experience.institution}
            <span className="nonbold">{this.props.experience.location}</span>
          </span>
        </h3>
        {this.props.experience.departments.map((department, index) => (
          <Department key={index} department={department} />
        ))}
      </div>
    );
  }
}

export default class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceItems,
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
        <div className="page">
          <div className="CV">
            <div>
              <h1 className="CV-title">Xinyu (Miranda) Zhang</h1>
            </div>
            <hr />
            <div className="email-pad">
              xinyumz@umich.edu; mirandazxy@outlook.com
            </div>
            <div className="sec">
              <h2 className="sec-title">Education</h2>
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    University of Michigan,{" "}
                    <span className="nonbold">Ann Arbor, MI</span>
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
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    University of Michigan,{" "}
                    <span className="nonbold">Ann Arbor, MI</span>
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
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    Harbin Institute of Technology,{" "}
                    <span className="nonbold">Harbin, China</span>
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

            <div className="sec">
              <h2 className="sec-title">Experience</h2>
              {this.state.experienceItems.map((experience, index) => (
                <Experience key={index} experience={experience} />
              ))}
            </div>

            <div className="sec">
              <h2 className="sec-title">Intership</h2>
              <div className="list">
                <h3 className="li-title2">
                  Harbin Measuring & Cutting Tool Group, FAW Group Corp., Harbin
                  Turbine Co. Ltd.
                </h3>
                <h3 className="li-title container-r">Sep. 2015</h3>
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
            <div className="sec">
              <h2 className="sec-title">Extracurricular Activities</h2>
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    Rackham Student Government,{" "}
                    <span className="nonbold">University of Michigan</span>
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
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    Stamp Nation: United by Music,{" "}
                    <span className="nonbold">University of Michigan</span>
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
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    Society of Women Engineers, Graduate Division,{" "}
                    <span className="nonbold">University of Michigan</span>
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
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    MADIBA CAMEROON 2014,{" "}
                    <span className="nonbold">Bangoua, Cameroon</span>
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
            <div className="sec list">
              <h2 className="sec-title">Skills & Interests</h2>
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
            <div className="sec list">
              <h2 className="sec-title">Publications</h2>
              <ol className="pub">
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
