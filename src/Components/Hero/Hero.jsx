import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router";
import Resume from "../../../BipinVishwakarmaResume.pdf";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Bipin Vishwakarma,</span> fullstack developer based in India.
      </h1>
      <p>
        I am a fullstack developer with 2 years of experience at Hipaas Inc.
      </p>
      <div className="hero-action">
        <Link className="anchor-link" offset={50} to="/#contact">
          <div className="hero-connect">Connect with me</div>
        </Link>

        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
