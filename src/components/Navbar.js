import { Link } from "react-router-dom";

import Logo from "../images/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <a className="navbar-brand" href="/">
        <img src={Logo} alt="" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto py-4 py-md-0">
          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
            <Link
              className="nav-link"
              to="/"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Home
            </Link>
          </li>
          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link className="nav-link" to="/services">
              Our Services
            </Link>
          </li>
          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link className="nav-link" to="/who-we-serve">
              Who We Serve
            </Link>
          </li>
          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link className="nav-link" to="/resources">
              Resources
            </Link>
          </li>
          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link className="nav-link" to="/offices">
              Offices
            </Link>
          </li>
          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link className="nav-link" to="/contact">
              Contact us
            </Link>
          </li>
          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link className="nav-link" to="/blogs">
              Blog
            </Link>
          </li>
          {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
            <Link className="nav-link" to="/login">
              Admin
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
