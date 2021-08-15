import Navbar from "./Navbar.js";
function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-info">
                <a href="#">
                  <i className="fa fa-phone"></i> 0123 456 7896
                </a>
                <a href="#">
                  <i className="fa fa-envelope"></i> info@edomain.com
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="social-media">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-wrap bg-light start-header start-style">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
