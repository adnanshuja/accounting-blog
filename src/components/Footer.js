import React, { Component } from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-menu">
                <h4>Services</h4>
                <ul>
                  <li>
                    <a href="">Overview</a>
                  </li>
                  <li>
                    <a href="">Features</a>
                  </li>
                  <li>
                    <a href="">Tutorials</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                  <li>
                    <a href="">Releases</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="">About </a>
                  </li>
                  <li>
                    <a href="">Press</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Partners</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="">Cookies Policy</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Terms of Service</a>
                  </li>
                  <li>
                    <a href="">Law Enforcement</a>
                  </li>
                  <li>
                    <a href="">Status</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu">
                <h4>Follow us</h4>
                <ul>
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Twitter</a>
                  </li>
                  <li>
                    <a href="">Dribbble</a>
                  </li>
                  <li>
                    <a href="">Instagram</a>
                  </li>
                  <li>
                    <a href="">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-12 border-footer"></div>
            <div className="col-md-12 ">
              <div className="rights">
                <h4>2021 All Rights Reserved. </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
