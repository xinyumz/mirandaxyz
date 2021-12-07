import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "./App";
import { experienceItems } from "./ResumeObjects";

class ResumeItem extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="li-item container">
          <span
            dangerouslySetInnerHTML={{ __html: this.props.item.title }}
          ></span>
          <span>{this.props.item.date}</span>
        </div>
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
        <div className="experience-subtitle container">
          <span> {this.props.item.title} </span>
          <span>{this.props.item.date}</span>
        </div>
      </div>
    );
  }
}

class Department extends React.Component {
  render() {
    return (
      <div>
        <div className="li-title container experience-title">
          <span>{this.props.department.title} </span>
          <span>{this.props.department.date} </span>
        </div>
        <div style={{ marginTop: "-1.5%" }}>
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
                    University of Michigan{" "}
                    <span className="nonbold">Ann Arbor, MI</span>
                  </span>
                  <span>Sep. 2018 - Jun. 2021</span>
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
                    University of Michigan{" "}
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
                    Harbin Institute of Technology{" "}
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
              <h2 className="sec-title">Extracurricular Activities</h2>
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    Rackham Student Government{" "}
                    <span className="nonbold">University of Michigan</span>
                  </span>
                  <span>May. 2017 - Sep. 2017</span>
                </h3>
                <div style={{ marginBottom: "0.5%" }}>
                  <strong>Position: Board Member</strong>
                </div>
                <div>
                  Board member on student life and communication committees.
                </div>
                <div>Participated in organizing student events.</div>
              </div>
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    Stamp Nation: United by Music{" "}
                    <span className="nonbold">University of Michigan</span>
                  </span>
                  <span>Sep. 2016 - Sep. 2017</span>
                </h3>
                <div style={{ marginBottom: "0.5%" }}>
                  <strong>Position: Executive Member</strong>
                </div>
                <div>
                  Organized music career & entrepreneurship workshop:{" "}
                  <em>Innovate Music.</em>
                </div>
                <div>
                  Co-organized student activities on campus:{" "}
                  <em>Concert on the Diag.</em>
                </div>
              </div>
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    Society of Women Engineers, Graduate Division{" "}
                    <span className="nonbold">University of Michigan</span>
                  </span>
                  <span>Sep. 2016 - Apr. 2017</span>
                </h3>
                <div style={{ marginBottom: "0.5%" }}>
                  <strong>Position: Active Member</strong>
                </div>
                <div>Volunteered in organization of career fair events.</div>
                <div>
                  Contributed efforts in promoting communication of students on
                  academic matters.
                </div>
              </div>
              <div className="list">
                <h3 className="li-title container">
                  <span>
                    MADIBA CAMEROON 2014{" "}
                    <span className="nonbold">Bangoua, Cameroon</span>
                  </span>
                  <span>Jul. 2014 - Aug. 2014</span>
                </h3>
                <div style={{ marginBottom: "0.5%" }}>
                  <strong>Position: Volunteer</strong>
                </div>
                <div>
                  Taught young students from rural areas in Cameroon basic
                  Chinese and English.
                </div>
                <div>
                  Promoted knowledge and education on hygiene and healthcare.
                </div>
                <div>
                  Organized and participated events for culture exchange in
                  rural towns and villages.
                </div>
              </div>
            </div>

            <div className="sec list">
              <h2 className="sec-title">Skills & Interests</h2>
              <div>
                <div style={{ marginBottom: "0.5%" }}>
                  Native speaker of Chinese (Mandarin), fluent in English.
                </div>
                <div style={{ marginBottom: "0.5%" }}>
                  Proficient in JavaScript, React, Python, C++, ChemDraw,
                  Origin, Microsoft Office Software.
                </div>
                <div style={{ marginBottom: "0.5%" }}>
                  Amateur musician of piano, guitar, and ukulele; amateur
                  painter.
                </div>
              </div>
            </div>

            <div className="sec list">
              <h2 className="sec-title">Publications</h2>
              <ol className="pub">
                <li style={{ marginBottom: "0.5%" }} id="pub-1">
                  <a
                    href="https://ceramics.onlinelibrary.wiley.com/doi/10.1111/jace.18271"
                    target="_blank"
                  >
                    Zhang, X.; Yu, M.; Indris, S.; Laine, R. M. Reactions of
                    Metal Chlorides with Hexamethyldisilazane. Novel Precursors
                    to Aluminum Nitride and Beyond. <em>J. Am. Ceram. Soc.</em>{" "}
                    <strong>2021</strong>, <em>xx</em>(x), xxxx.
                  </a>
                </li>

                <li style={{ marginBottom: "0.5%" }} id="pub-2">
                  <a href="https://dx.doi.org/10.7302/2762" target="_blank">
                    Zhang, X. Novel Solid Electrolytes Derived From Polymer
                    Syntheses. Ph.D. Dissertation, University of Michigan, Ann
                    Arbor, MI, 2021.
                  </a>
                </li>

                <li style={{ marginBottom: "0.5%" }} id="pub-3">
                  <a
                    href="https://pubs.acs.org/doi/abs/10.1021/acsapm.1c00192"
                    target="_blank"
                  >
                    Temeche, E.; Zhang, X.; Laine, R. M. Electrochemical
                    Performance of Li<sub>x</sub>SiON Polymer Electrolytes
                    Derived from an Agriculture Waste Product, Rice Hull Ash.{" "}
                    <em>ACS Appl. Polym. Mater.</em> <strong>2021</strong>,{" "}
                    <em>3</em>(4), 2144–2152.
                  </a>
                </li>
                <li style={{ marginBottom: "0.5%" }} id="pub-4">
                  <a
                    href="https://pubs.acs.org/doi/abs/10.1021/acsaem.0c02994"
                    target="_blank"
                  >
                    Temeche, E.; Buch, E.; Zhang, X.; Brandt, T.; Hintennach,
                    A.; Laine, R. M. Improved Electrochemical Properties of Li
                    <sub>4</sub>Ti<sub>5</sub>O<sub>12</sub> Nanopowders (NPs)
                    via Addition of LiAlO<sub>2</sub> and Li<sub>6</sub>SiON
                    Polymer Electrolytes, Derived from Ag-ricultural Waste.{" "}
                    <em>ACS Appl. Energy Mater.</em> <strong>2021</strong>,{" "}
                    <em>4</em>(2), 1894–1905.
                  </a>
                </li>
                <li style={{ marginBottom: "0.5%" }} id="pub-5">
                  <a
                    href="https://ceramics.onlinelibrary.wiley.com/doi/full/10.1111/jace.17570"
                    target="_blank"
                  >
                    Zhang, X.; Cheng, X.; Jansohn, M.; Niedermaier, M.; Lenk,
                    T.; Britting, S.; Schmidt, K.; Laine, R. M. <em>t</em>-ZrO
                    <sub>2</sub> Toughened Al<sub>2</sub>O<sub>3</sub>{" "}
                    Free-Standing Films and as Oxidation Mitigating Thin Films
                    on Silicon Nitride via Colloidal Processing of Flame Made
                    Nanopowders (NPs). <em>J. Am. Ceram. Soc.</em>{" "}
                    <strong>2021</strong>, <em>104</em>(3), 1281–1296.
                  </a>
                </li>
                <li style={{ marginBottom: "0.5%" }} id="pub-6">
                  <a
                    href="https://pubs.rsc.org/en/content/articlehtml/2020/gc/d0gc02580a"
                    target="_blank"
                  >
                    Zhang, X.; Temeche, E.; Laine, R. M. Li<sub>x</sub>SiON (x =
                    2, 4, 6): A Novel Solid Electrolyte System Derived from
                    Ag-ricultural Waste. <em>Green Chem.</em>{" "}
                    <strong>2020</strong>, <em>22</em>(21), 7491–7505.
                  </a>
                </li>
                <li style={{ marginBottom: "0.5%" }} id="pub-7">
                  <a
                    href="https://pubs.acs.org/doi/abs/10.1021/acsami.0c06196"
                    target="_blank"
                  >
                    Temeche, E.; Zhang, X.; Laine, R. M. Solid Electrolytes for
                    Li–S Batteries: Solid Solutions of Poly(Ethylene Oxide) with
                    Li<sub>x</sub>PON- and Li<sub>x</sub>SiPON-Based Polymers.{" "}
                    <em>ACS Appl. Mater. Interfaces</em> <strong>2020</strong>,{" "}
                    <em>12</em>(27), 30353–30364.
                  </a>{" "}
                </li>

                <li style={{ marginBottom: "0.5%" }} id="pub-8">
                  <a
                    href="https://doi.org/10.1021/acsami.0c03341"
                    target="_blank"
                  >
                    Temeche, E.; Zhang, X.; Laine, R. M. Polymer Precursor
                    Derived Li<sub>x</sub>PON Electrolytes: Toward Li-S
                    Batteries. <em>ACS Appl. Mater. Interfaces</em>{" "}
                    <strong>2020</strong>, <em>12</em>(18), 20548-20562.
                  </a>{" "}
                </li>
                <li style={{ marginBottom: "0.5%" }} id="pub-9">
                  <a
                    href="https://doi.org/10.1021/acs.macromol.0c00254"
                    target="_blank"
                  >
                    Zhang, X.; Temeche, E.; Laine, R. M. Design, Synthesis, and
                    Characterization of Polymer Precursors to Li<sub>x</sub>PON
                    and Li<sub>x</sub>SiPON Glasses: Materials That Enable
                    All-Solid-State Batteries (ASBs). <em>Macromolecules</em>{" "}
                    <strong>2020</strong>, <em>53</em>(7), 2702-2712.
                  </a>
                </li>
                <li style={{ marginBottom: "0.5%" }} id="pub-10">
                  <a
                    href="https://doi.org/10.1021/acs.macromol.9b02676"
                    target="_blank"
                  >
                    Zhang, X.; Yu, M.; Laine, R. M. An Approach to Epoxy Resins:
                    Oxysilylation of Epoxides. <em>Macromolecules</em>{" "}
                    <strong>2020</strong>, <em>53</em>(6), 2249-2263.
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
