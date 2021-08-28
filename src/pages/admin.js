import React from "react";
import { Route, Switch } from "react-router-dom";

import AdminHeader from "../components/Admin-Navbar.js";
import CreateBlog from "./create-blog.js";
import CreateService from "./create-service.js";
import logo from "../images/logo.png";
function admin(props) {
  return (
    
    <div className="admin-wrapper">
      <div className="topbar-wrapper">
        <figure>
        <img className="img-fluid" src={logo} alt="" />
        </figure>
      </div>
      <div className="admin-inner-wrapper">
        <div className="sidebar-wrapper">
        <AdminHeader props={props} />
        </div>
      <div className="main-content-wrapper">
      <Switch>
          <Route
            exact
            path={`${props.match.url}/create-blog`}
            component={CreateBlog}
          />
          <Route
            exact
            path={`${props.match.url}/create-service`}
            component={CreateService}
          />
        </Switch>
      </div>
      </div>
      
    </div>
  );
}

export default admin;
