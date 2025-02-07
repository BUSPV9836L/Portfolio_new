import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import { Link } from "react-router";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.slice(0, 6).map((work, index) => (
          <div key={index}>
            <h4 style={{ marginBottom: "10px" }}>{work.w_name}</h4>
            <img src={work.w_img} alt={work.w_name} />
          </div>
        ))}
      </div>
      <Link to="MyWork" className="anchor-link">
        <div className="mywork-showmore">
          <p>Show More</p>

          <img src={arrow_icon} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default MyWork;
