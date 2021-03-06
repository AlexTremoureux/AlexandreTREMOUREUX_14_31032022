import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import Navigation from "./Navigation";

// Header of App
const Header = () => {
  const pathNameValue = useLocation().pathname
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <h1 className="title">HRnet</h1>
      {
        pathNameValue === '/'?
        <Navigation path={"/employee-list"} text={"Current employee"} />
        :
        <Navigation path={"/"} text={"Create employee"} />
      }
      
    </div>
  );
};

export default Header;
