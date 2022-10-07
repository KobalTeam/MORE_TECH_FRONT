import React from "react";
import Goal from "./Goal";

const ActivitiesPanel = () => (
  <div className="activatesPanel w-80">
    <Goal
      localScore={5}
      name="Goal"
      score={10}
    />
  </div>
);

export default ActivitiesPanel;
