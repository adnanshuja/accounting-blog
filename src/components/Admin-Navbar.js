import React from "react";
import { NavLink } from "react-router-dom";

import { removeUserSession } from "../utils/common";

const AdminNavbar = ({ props }) => {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <nav>
      <NavLink to="/create-service">Create Service</NavLink>
      <NavLink to="/create-blog">Create Blog</NavLink>
      <input type="button" onClick={handleLogout} value="Logout" />
    </nav>
  );
};

export default AdminNavbar;
