import React from "react";
import { NavLink } from "react-router-dom";

const EmployeeList = () => {
  return (
    <>
      <h2>current employee</h2>
      <NavLink className="main-nav-item" to={"/"}>
        <i className="fa fa-sign-out"></i>
        Home
      </NavLink>
    </>
  );
};

export default EmployeeList;
