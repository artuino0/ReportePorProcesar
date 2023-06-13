import React from "react";
import logo from '../../assets/logo.png'
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
  <div className="h-28 flex items-center bg-white drop-shadow-md">
    <img className="w-[230px] h-[60px] mx-10" src={logo} alt="Logo"/>
    <HeaderContent></HeaderContent>
  </div>);
};

export default Header;
