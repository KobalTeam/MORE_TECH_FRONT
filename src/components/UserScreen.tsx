import React from "react";
import MainField from "@src/Components/MainField";
import RightPanel from "@src/Components/RightPanel";
import ActivitiesPanel from "@components/ActivitiesPanel";

const UserScreen = (): JSX.Element => (
  <div className="body-main">
    <ActivitiesPanel />

    <MainField />

    <RightPanel />
  </div>
);

export default UserScreen;
