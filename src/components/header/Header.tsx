import React from "react";
import logo from '../../assets/logo.png'
import HeaderContent from "./headerContent";

const Header = () => {
  return (
  <div className="h-24 bg-white drop-shadow-md">
    <img className="w-[150px] h-[60px]" src={logo} alt="Logo"/>
    <HeaderContent></HeaderContent>
  </div>);
};

export default Header;
