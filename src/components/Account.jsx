import React from "react";
import Bio from "./Bio";
import Activity from "./Activity";
import Feeds from "./Feeds";
import Dashboard from "./Dashboard";
import Videos from "./Videos";

const Account = () => {
  //console.log("props in account", props.username);

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
