import React, { Component } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import { removeUserSession } from "../utils/common";

const AdminNavbar = ({ props }) => {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  const { path, url } = useRouteMatch();

  return (
    <nav>
      <NavLink to={`${url}/create-service`}>Create Service</NavLink>
      <NavLink to={`${url}/create-blog`}>Create Blog</NavLink>
      <input type="button" onClick={handleLogout} value="Logout" />
    </nav>
  );
};

export default AdminNavbar;
