import React from "react";
import SideNav from "../SideNav/SideNav";
import { Outlet } from "react-router-dom";
import About from "../About/About";
import Projects from "../Projects/Projects";

import "bootstrap/dist/css/bootstrap.min.css";

const RootLayout = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <SideNav />
      </div>
      <div className="col-sm-8">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
