import React from "react";
import GoalBar from "@components/main_user/Goal/GoalBar";
import UpcomingActivities from "@components/main_user/ListActivities";

const LeftBar = (): JSX.Element => (
  <div className="main-side-bar">
    <p className="text">GOAL</p>
    <GoalBar />
    <p className="text">UPCOMING ACTIVITIES</p>
    <UpcomingActivities />
  </div>
);

export default LeftBar;
