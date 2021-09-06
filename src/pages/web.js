import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer.js";

import BlogsPage from "./blogs.js";
import IndexPage from "./index.js";
import AboutusPage from "./about.js";
import OfficesPage from "./offices.js";
import Office1 from "./offices/offices1.js";
import ContactusPage from "./contact.js";
import ServicesPage from "./services.js";
import WhoWeServePage from "./who-weserve.js";
import BlogDetailPage from "./single-blog.js";
import Resources from "./resources";
import ServiceDetail from "./single-service.js";
import Whoweserve1 from "./whoweserve/whoweserve1";

function Web(props) {
  return (
    <div>
      <Header />
      <Route exact path="/" component={IndexPage} />
      <Route path="/about" component={AboutusPage} />
      <Route path="/contact-us" component={ContactusPage} />
      <Route path="/offices" component={OfficesPage} />
      <Route path="/office1" component={Office1} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/who-we-serve" component={WhoWeServePage} />
      <Route path="/blog-details/:id" component={BlogDetailPage} />
      <Route path="/resources" component={Resources} />
      <Route path="/whoweserve1" component={Whoweserve1} />
      <Route path="/service-detail/:id" component={ServiceDetail} />
      <Footer />
    </div>
  );
}

export default Web;
