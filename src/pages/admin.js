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
  );
}

export default admin;
