import React from "react";
import LatestActivities from "@components/main_user/ListActivities";

const RightBar = (): JSX.Element => (
  <div className="main-side-bar">
    <p className="text">LATEST ACTIVITIES</p>
    <LatestActivities />
  </div>
);

export default RightBar;
