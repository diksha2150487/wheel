import React, { useState } from "react";
import "./Navbar.css";
import img1 from "./APIs.jpeg";

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img className="company-logo" src={img1} alt="logo" />
      </div>
      <div className="tabs">
        <div className="h">
          <a href="#home" class="active" style={{ textDecoration: "none" }}>
            Home
          </a>
        </div>
        <div className="a">
          <a href="#news" style={{ textDecoration: "none" }}>
            About
          </a>
        </div>
        <div className="b">
          <a href="#news" style={{ textDecoration: "none" }}>
            Blog
          </a>
        </div>
        <div className="f">
          <a href="#news" style={{ textDecoration: "none" }}>
            Features
          </a>
        </div>
        <div className="i">
          <a href="#news" style={{ textDecoration: "none" }}>
            How It Works
          </a>
        </div>
        <div className="p">
          <a href="#news" style={{ textDecoration: "none" }}>
            Service <i class="fa fa-angle-down"></i>
          </a>
        </div>
        <div className="c">
          <a href="#news" style={{ textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </div>
      <div className="but">
        <button>
          <b>Sing Up Now</b>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
