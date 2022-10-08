import React from "react";
import LeftBar from "@components/main_user/LeftBar";
import MainField from "@components/main_user/MainField";
import RightBar from "@components/main_user/RightBar";

const Body = (): JSX.Element => (
  <div className="body-main">
    <LeftBar />
    <MainField />
    <RightBar />
  </div>
);

export default Body;
