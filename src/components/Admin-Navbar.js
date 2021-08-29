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
      <ul>
        <li><NavLink to={`${url}/create-service`}><i className="fa fa-plus"></i>Create Service</NavLink></li>
        <li><NavLink to={`${url}/create-blog`}><i className="fa fa-plus"></i>Create Blog</NavLink></li>
        <li className="logout"><input type="button" onClick={handleLogout} value="Logout" /></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
