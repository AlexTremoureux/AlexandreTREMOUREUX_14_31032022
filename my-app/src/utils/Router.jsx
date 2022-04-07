import { Route, Routes } from "react-router-dom";
import Page404 from "../Components/Page404";
import CreateEmployee from "../Containers/CreateEmployee";
import EmployeeList from "../Containers/EmployeeList";

export const Router = () => (
    <>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );