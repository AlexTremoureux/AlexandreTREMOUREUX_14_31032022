import React from "react";
import { useSelector } from "react-redux";
import { selectListOfEmployee } from "../app/selectors";
import Table from "../Components/Table";
import { columnsTable } from "../utils/data";

const EmployeeList = () => {
  const dataStored = useSelector(selectListOfEmployee);
  //const data = React.useMemo(() => dataStored, [dataStored]);
  //const columns = React.useMemo(() => columnsTable, []);
  
  return (
    <>
      <h2>current employee</h2>
      <Table columns={columnsTable} data={dataStored} />
    </>
  );
};

export default EmployeeList;
