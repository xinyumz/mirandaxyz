import React, { useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { GoChevronDown } from "react-icons/go";
import "./FrontPage.css";

export default function FrontPage() {
  const projectRef = useRef();

  function handleClick() {
    projectRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <Helmet>
        <title>Welcome | Xinyu (Miranda) Zhang</title>
      </Helmet>
      <Header />
      <div
        className="frontpage"
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <div className="frontblock">
          <div className="welcome">
            <strong>WELCOME, I am</strong>
          </div>
          <div className="name-back">
            <div className="name">
              <strong>Xinyu Zhang</strong>
              <span className="name-cn">
                <strong> | 张馨予</strong>
              </span>
            </div>
          </div>
          <div className="name2">
            or you can call me{" "}
            <span
              style={{
                fontWeight: "bold",
                color: "white",
                fontStyle: "italic",
              }}
            >
              Miranda
            </span>
          </div>
          <div className="selfintro">
            PhD in Materials Sci {"&"} Eng, Umich | Web Developer | Amateur
            Musician, Composer, and Painter
          </div>
          <div className="down-button" onClick={handleClick}>
            <GoChevronDown />
          </div>
        </div>

        <div ref={projectRef}>
          <Projectblock />
        </div>
      </div>
    </div>
  );
}

function Projectblock() {
  return (
    <div className="pro-block">
      <div className="pro-title">PROJECTS</div>
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
