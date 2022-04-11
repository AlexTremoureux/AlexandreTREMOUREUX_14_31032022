import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectListOfEmployee } from "../app/selectors";
import Table from "../Components/Table";
import { columnsTable } from "../utils/data";

const EmployeeList = () => {
  const dataStored = useSelector(selectListOfEmployee);
  const data = React.useMemo(() => dataStored, [dataStored]);
  const columns = React.useMemo(() => columnsTable, []);
console.log(data)
  return (
    <>
      <h2>current employee</h2>
      <NavLink className="main-nav-item" to={"/"}>
        <i className="fa fa-sign-out"></i>
        Home
      </NavLink>
      <Table columns={columns} data={data} />
    </>
  );
};

export default EmployeeList;
