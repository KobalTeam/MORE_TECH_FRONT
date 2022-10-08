import React from "react";
import Header from "@components/Header";
import ActivitiesPanel from "@src/Components/ActivitiesPanel";
import "@style/_all.scss";

function App(): JSX.Element {
  return (
    <div>
      <Header />

      <ActivitiesPanel />
    </div>
  );
}

export default App;
