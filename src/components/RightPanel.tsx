import React from "react";
import Activities from "@components/Activities";

const RightPanel = (): JSX.Element => (
  <div className="main-side-bar w-80 bg-blue-400">
    <div className="main-side-bar bg-blue-300 rounded-lg m-2 p-2 pb-4">
      <p className="text-1 font-nunito text-center">LATEST ACTIVITIES</p>

      <Activities list={["Courses", "Mentoring"]} />
    </div>
  </div>
);

export default RightPanel;
