import React, { useEffect } from "react";
import "../../Components/MyWork/MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import "./MyWorkDetails.css";

const MyWorkDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="work" className="mywork">
      {/* Title Box */}
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* Work Details Container */}
      <div className="my-work-details-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-card">
            {/* Work Title */}
            <h4 className="work-title">{work.w_name}</h4>

            {/* Work Details Layout */}
            <div className="work-content">
              {/* Work Image */}
              <img className="work-image" src={work.w_img} alt={work.w_name} />

              {/* Work Description */}
              <div
                className="work-description"
                dangerouslySetInnerHTML={{ __html: work.description || "" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorkDetails;
