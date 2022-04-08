import React from "react";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectListOfEmployee } from "../app/selectors";

const EmployeeList = () => {
  
  const data = useSelector(selectListOfEmployee)
  console.log(data)
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
