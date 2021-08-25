import React from "react";
import { Route, Switch } from "react-router-dom";

import AdminHeader from "../components/Admin-Navbar.js";
import CreateBlog from "./create-blog.js";
import CreateService from "./create-service.js";

function admin(props) {
  return (
    <div>
      <AdminHeader props={props} />
      <Switch>
        <Route path="/" component={CreateService} />
        <Route path="/create-blog" component={CreateBlog} />
      </Switch>
    </div>
  );
}

export default admin;
