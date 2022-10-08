import React from "react";
import Header from "@components/Header";
import LeftBar from "@components/main_user/LeftBar";
import MainField from "@components/main_user/MainField";
import Body from "@components/Body";
import "@style/_all.scss";

function App(): JSX.Element {
  return (
    <div>
      <Header />

      <Body />
    </div>
  );
}

export default App;
