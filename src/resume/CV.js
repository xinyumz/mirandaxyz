import React from "react";
import CVStyles from "./CV.module.css";
import { Publications, Patent } from "./Publications";
import { Helmet } from "react-helmet";
import Header from "../Header";
import { experienceItems } from "./CVObjects";

function ResumeItem({ ...props }) {
  return (
    <div className={CVStyles.list}>
      <div className={`${CVStyles.liItem} ${CVStyles.container}`}>
        <span dangerouslySetInnerHTML={{ __html: props.item.title }}></span>
        <span>{props.item.date}</span>
      </div>
      <span dangerouslySetInnerHTML={{ __html: props.item.descs }}></span>
    </div>
  );
}

function ResearchPosition({ ...props }) {
  return (
    <div className={CVStyles.list}>
      <div className={`${CVStyles.experienceSubtitle} ${CVStyles.container}`}>
        <span> {props.item.title} </span>
        <span>{props.item.date}</span>
      </div>
    </div>
  );
}

function Department({ ...props }) {
  return (
    <div>
      <div
        className={`${CVStyles.liTitle} ${CVStyles.container} ${CVStyles.experienceTitle}`}
      >
        <span>{props.department.title} </span>
        <span>{props.department.date} </span>
      </div>
      <div style={{ marginTop: "-1.5%" }}>
        <em>{props.department.supervisor}</em>
      </div>
      {props.department.positions.map((item, index) => (
        <ResearchPosition key={index} item={item} />
      ))}
      {props.department.resumeItems.map((item, index) => (
        <ResumeItem key={index} item={item} />
      ))}
    </div>
  );
}

function Experience({ ...props }) {
  return (
    <div className={CVStyles.list}>
      <h3 className={`${CVStyles.liTitle} ${CVStyles.container}`}>
        <span>
          {props.experience.institution}
          <span style={{ fontWeight: "normal" }}>
            {props.experience.location}
          </span>
        </span>
      </h3>
      {props.experience.departments.map((department, index) => (
        <Department key={index} department={department} />
      ))}
    </div>
  );
}

export default function CV() {
  return (
    <div>
      <Helmet>
        <title>CV | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div className={CVStyles.CVpage}>
        <div className={CVStyles.CVcontent}>
          <div>
            <h1 className={CVStyles.CVTitle}>Xinyu (Miranda) Zhang</h1>
          </div>
          <hr />
          <div className={CVStyles.emailPad}>
            xinyumz@umich.edu; mirandazxy@outlook.com
          </div>
          <div className={CVStyles.sec}>
            <h2 className={CVStyles.secTitle}>Education</h2>
            <div className={CVStyles.list}>
              <h3 className={`${CVStyles.liTitle} ${CVStyles.container}`}>
                <span>
                  University of Michigan{" "}
                  <span style={{ fontWeight: "normal" }}>Ann Arbor, MI</span>
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
            <div className={CVStyles.list}>
              <h3 className={`${CVStyles.liTitle} ${CVStyles.container}`}>
                <span>
                  University of Michigan{" "}
                  <span style={{ fontWeight: "normal" }}>Ann Arbor, MI</span>
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
            <div className={CVStyles.list}>
              <h3 className={`${CVStyles.liTitle} ${CVStyles.container}`}>
                <span>
                  Harbin Institute of Technology{" "}
                  <span style={{ fontWeight: "normal" }}>Harbin, China</span>
                </span>
                <span>Sep. 2012 - July. 2016</span>
              </h3>
              <div>
                <strong>B.S. in Materials Science and Engineering</strong>
              </div>
              <div>
                <em>GPA:</em> 3.72/4.0; People's Scholarship 2012-2014
              </div>
            </div>
          </div>

          <div className={CVStyles.sec}>
            <h2 className={CVStyles.secTitle}>Experience</h2>
            {experienceItems.map((experience, index) => (
              <Experience key={index} experience={experience} />
            ))}
          </div>

          <div className={CVStyles.sec}>
            <h2 className={CVStyles.secTitle}>Extracurricular Activities</h2>
            <div className={CVStyles.list}>
              <h3 className={`${CVStyles.liTitle} ${CVStyles.container}`}>
                <span>
                  Rackham Student Government{" "}
                  <span style={{ fontWeight: "normal" }}>
                    University of Michigan
                  </span>
                </span>
                <span>May. 2017 - Sep. 2017</span>
              </h3>
              <div style={{ marginBottom: "0.5%", fontWeight: 700 }}>
                Position: Board Member
              </div>
              <div>
                Board member on student life and communication committees.
              </div>
              <div>Participated in organizing student events.</div>
            </div>
            <div className={CVStyles.list}>
              <h3 className={`${CVStyles.liTitle} ${CVStyles.container}`}>
                <span>
                  Stamp Nation: United by Music{" "}
                  <span style={{ fontWeight: "normal" }}>
                    University of Michigan
                  </span>
                </span>
                <span>Sep. 2016 - Sep. 2017</span>
              </h3>
              <div style={{ marginBottom: "0.5%", fontWeight: 700 }}>
                Position: Executive Member
              </div>
              <div>
                Organized music career {"&"} entrepreneurship workshop:{" "}
                <em>Innovate Music.</em>
              </div>
              <div>
                Co-organized student activities on campus:{" "}
                <em>Concert on the Diag.</em>
              </div>
            </div>
            <div className={CVStyles.list}>
              <h3 className={`${CVStyles.liTitle} ${CVStyles.container}`}>
                <span>
                  Graduate Society of Women Engineers{" "}
                  <span style={{ fontWeight: "normal" }}>
                    University of Michigan
                  </span>
                </span>
                <span>Sep. 2016 - Apr. 2017</span>
              </h3>
              <div style={{ marginBottom: "0.5%", fontWeight: 700 }}>
                Position: Active Member
              </div>
              <div>
                Volunteered in organization of career fair events for graduate
                female engineering students.
              </div>
              <div>
                Contributed efforts in promoting communication of students on
                academic matters.
              </div>
            </div>
            <div className={CVStyles.list}>
              <h3 className={`${CVStyles.liTitle} ${CVStyles.container}`}>
                <span>
                  MADIBA CAMEROON 2014{" "}
                  <span style={{ fontWeight: "normal" }}>
                    Bangoua, Cameroon
                  </span>
                </span>
                <span>Jul. 2014 - Aug. 2014</span>
              </h3>
              <div style={{ marginBottom: "0.5%", fontWeight: 700 }}>
                Position: Volunteer
              </div>
              <div>
                Taught young students from rural areas in Cameroon basic Chinese
                and English.
              </div>
              <div>
                Promoted knowledge and education on hygiene and healthcare.
              </div>
              <div>
                Organized and participated events for culture exchange in rural
                towns and villages.
              </div>
            </div>
          </div>

          <div className={`${CVStyles.sec} ${CVStyles.list}`}>
            <h2 className={CVStyles.secTitle}>Skills {"&"} Interests</h2>
            <div>
              <div style={{ marginBottom: "0.5%" }}>
                Native speaker of Chinese (Mandarin), fluent in English.
              </div>
              <div style={{ marginBottom: "0.5%" }}>
                Proficient in JavaScript, React, Python, C++, ChemDraw, Origin,
                Microsoft Office Software.
              </div>
              <div style={{ marginBottom: "0.5%" }}>
                Amateur musician of piano, guitar, and ukulele; amateur painter.
              </div>
            </div>
          </div>

          <div className={`${CVStyles.sec} ${CVStyles.list}`}>
            <h2 className={CVStyles.secTitle}>Publications</h2>
            <div className={CVStyles.pub}>
              <Publications />
            </div>
            <h3 className={CVStyles.liTitle}>Patent Application</h3>
            <div style={{ marginTop: 6 }}>
              <Patent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
