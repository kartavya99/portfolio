import React from "react";
import SideNav from "../SideNav/SideNav";

import "bootstrap/dist/css/bootstrap.min.css";

const RootLayout = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <SideNav />
      </div>
      <div className="col-sm-8"> Pages</div>
    </div>
  );
};

export default RootLayout;
