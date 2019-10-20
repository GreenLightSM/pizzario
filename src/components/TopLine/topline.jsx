import React from "react";
import c from "./topline.module.css";
import logo from "../../img/logo.png";
import Search from "../Search/search";

const TopLine = () => {
  return (
    <div className={c.top_line}>
      <img src={logo} alt="logo" />
      <Search />
    </div>
  );
};

export default TopLine;
