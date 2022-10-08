import React from "react";
import Header from "@components/Header";
import UserScreen from "@src/Components/UserScreen";
import "@style/_all.scss";

function App(): JSX.Element {
  return (
    <div>
      <Header />

      <UserScreen />
    </div>
  );
}

export default App;
