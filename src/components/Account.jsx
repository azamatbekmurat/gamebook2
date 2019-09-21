import React, { Component } from "react";
import Bio from "./Bio";
import Activity from "./Activity";
import Feeds from "./Feeds";
import Dashboard from "./Dashboard";
import Videos from "./Videos";

const Account = props => {
  console.log("account props", props);
  return (
    <div className="row">
      <div className="col-sm-3">
        <Bio />
        <Activity />
        <Feeds />
      </div>
      <div className="col-7">
        <Dashboard />
        <Videos />
      </div>
    </div>
  );
};

export default Account;
