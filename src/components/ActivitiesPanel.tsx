import React from "react";
import Activities from "@components/Activities";
import Goal from "@components/Goal";

const ActivitiesPanel = () => (
  <div className="activitiesPanel w-80 bg-slate-100">
    <Goal
      localScore={5}
      name="Goal"
      score={10}
    />

    <p className="text-center uppercase mt-10 font-nunito">
      UPCOMING ACTIVITIES
    </p>

    <Activities list={["Courses", "Mentoring"]} />
  </div>
);

export default ActivitiesPanel;
