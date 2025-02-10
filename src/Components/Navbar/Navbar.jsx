import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(sessionStorage.getItem("menu") || "home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };

  useEffect(() => {
    sessionStorage.setItem("menu", menu);
  }, [menu]);
  useLayoutEffect(() => {
    const navbar = document.querySelector(".navbar");
    const navbarBorder = document.createElement("div");

    navbarBorder.style.position = "absolute";
    navbarBorder.style.bottom = "0";
    navbarBorder.style.left = "0";
    navbarBorder.style.height = "3px";
    navbarBorder.style.background =
      "linear-gradient(270deg, #DF8908 80%, #B415FF 100%)";
    navbarBorder.style.width = "0";
    navbarBorder.style.transition = "width 0.1s ease-in-out";
    navbar.appendChild(navbarBorder);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollTop > 0) {
        navbar.style.backgroundColor = "#01305c";
      } else {
        navbar.style.backgroundColor = "transparent";
      }

      navbarBorder.style.width = `${scrollPercentage}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar">
      <h1 className="portfolio-name">BIPIN Vishwakarma</h1>
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <Link
            to="/#home"
            onClick={() => setMenu("home")}
            className="anchor-link"
          >
            <p>Home</p>
          </Link>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link
            to="/#about"
            onClick={() => setMenu("about")}
            className="anchor-link"
          >
            <p>About Me</p>
          </Link>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link
            to="/#work"
            onClick={() => setMenu("work")}
            className="anchor-link"
          >
            <p>My Latest Work</p>
          </Link>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <Link
            to="/#contact"
            onClick={() => setMenu("contact")}
            className="anchor-link"
          >
            <p>Contact</p>
          </Link>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
        {/* <li>
          <Link
            to="/Article"
            onClick={() => setMenu("Article")}
            className="anchor-link"
          >
            <p>Article</p>
          </Link>
          {menu === "Article" && <img src={underline} alt="underline" />}
        </li> */}
      </ul>

      <Link to="/#contact" className="anchor-link">
        <div className="nav-connect"> Connect With Me</div>
      </Link>
    </div>
  );
};

export default Navbar;
