import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_image.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Software Engineer with 2 years of experience
              in React.js, JavaScript, Node.js, and databases like PostgreSQL
              and Neo4j. Skilled in developing scalable web applications,
              building reusable UI components, and integrating REST APIs.
              Currently working at Hipaas Infotech, contributing to projects
              that enhance data interoperability and streamline operations.
              Proficient in full-stack technologies like Bootstrap, Tailwind,
              and Material UI, with expertise in React-Router and ag-Grid for
              efficient UI development, creating REST APIs. Passionate about
              optimizing performance, improving user experience, and working on
              innovative solutions in healthcare and enterprise applications.
            </p>
            <p>
              My passion for software development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
