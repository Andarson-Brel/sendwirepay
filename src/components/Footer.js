import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-menu">
        <img src="./images/nav-logo.svg" alt="" className="footer-logo" />
        <ul className="footer-nav">
          <Link
            to={
              "https://wirepay.notion.site/TERMS-OF-SERVICE-aaf0a749a92649109a336f53d56ded2a"
            }
          >
            <li className="footer-links">Terms Of Service</li>
          </Link>
          <Link
            to={
              "https://wirepay.notion.site/Wirepay-Frequently-Asked-Questions-6477c2b21ea4432aa5efb9ee6bb29381"
            }
          >
            <li className="footer-links">FAQ</li>
          </Link>
          <Link to={"https://sendwirepay.com/policy"}>
            <li className="footer-links">ISMS Policy</li>
          </Link>
          <Link
            to={
              "https://wirepay.notion.site/AML-KYC-POLICY-0df09c5396374e098dce66077506d08b"
            }
          >
            <li className="footer-links">AML Policy</li>
          </Link>
          <Link
            to={
              "https://wirepay.notion.site/PRIVACY-POLICY-5d627241d3de401a9f15df673a150bd2"
            }
          >
            <li className="footer-links">Privacy Policy</li>
          </Link>
        </ul>
      </div>
      <div className="sub-footer-menu">
        <p className="submenu-description">
          Wirepay is a product of Maplerad Technologies Inc. Wirepay is a
          financial technology company and is not a bank. We offer our products
          and services in partnership with licensed transmitters and banking
          partners in their respective jurisdictions.
        </p>
        <div className="sub-footer-btn">
          <button className="sub-menu-btn">Contact Us</button>
          <Link to={"https://twitter.com/Andarson_brel"}>
            <button className="sub-menu-btn">Twitter</button>
          </Link>
          <Link to={"https://www.linkedin.com/in/daniel-innocent-b93ab421b/"}>
            <button className="sub-menu-btn">LinkedIn</button>
          </Link>
        </div>
      </div>
      <p className="copyrights">
        © 2023 Maplerad Technologies Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
