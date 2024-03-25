import React from "react";
import { Link } from "react-router-dom";
// import "../"; // Import your CSS file here

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img src="./images/nav-logo.svg" alt="" className="logo-img" />
        </div>
        <ul className="nav-menu">
          <Link to={"https://maplerad.com/"}>
            <li className="nav-link">Business</li>
          </Link>
          <Link to={"https://sendwirepay.com/about-us"}>
            <li className="nav-link">About Us</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
