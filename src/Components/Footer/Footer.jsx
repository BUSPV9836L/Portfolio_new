import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1 className=" portfolio-name">BIPIN</h1>
          <p>
            I am a frontend developer from, India with 1.5 years of experience
            at Hipaas Inc.
          </p>
        </div>
        <div className="footer-top-right">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <a
              href="https://www.linkedin.com/in/bipin-vishwakarma-68a15a242/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaLinkedin size={35} />
            </a>
            <a
              href="https://www.instagram.com/ll_b.i.p.i.n_ll_2709?igsh=MXhndm93ejNscWw2Zg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <RiInstagramFill size={35} />
            </a>
            <a
              href="https://github.com/BUSPV9836L"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/xyzbipin/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "white" }}
            >
              <SiGeeksforgeeks size={35} />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2023 Bipin Vishwakarma. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
