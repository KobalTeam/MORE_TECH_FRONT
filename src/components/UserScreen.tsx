import React from "react";
import MainField from "@src/Components/MainField";
import RightPanel from "@src/Components/RightPanel";
import ActivitiesPanel from "@components/ActivitiesPanel";
import Header from "@components/Header";

const UserScreen = (): JSX.Element => (
  <>
    <Header />

    <div className="body-main">
      <ActivitiesPanel />

      <MainField />

      <RightPanel />
    </div>
  </>
);

export default UserScreen;
