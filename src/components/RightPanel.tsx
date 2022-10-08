import React from "react";
import Activities from "@components/Activities";

const RightPanel = (): JSX.Element => (
  <div className="main-side-bar w-80 bg-slate-100">
    <p className="text font-nunito text-center mt-5">LATEST ACTIVITIES</p>

    <Activities list={["Courses", "Mentoring"]} />
  </div>
);

export default RightPanel;
