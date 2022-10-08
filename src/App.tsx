import React from "react";
import "@style/_all.scss";
import LoginScreen from "@src/Components/LoginScreen";
import { Route, Routes } from "react-router-dom";
import Transfer from "@components/TransferScreen";
import ActivitiesScreen from "@components/ActivitiesScreen";
import UserScreen from "@components/UserScreen";
import MarketPlace from "@components/MarketPlaceScreen";
import ScoreScreen from "./Components/ScoreScreen/ScoreScreen";

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        element={<LoginScreen />}
        path="/"
      />

      <Route
        element={<UserScreen />}
        path="/user"
      />

      <Route
        element={<ActivitiesScreen />}
        path="/activities"
      />

      <Route
        element={<MarketPlace />}
        path="/market"
      />

      <Route
        element={<Transfer />}
        path="/transfer"
      />

      <Route
        // eslint-disable-next-line prettier/prettier
        element={(
          <ScoreScreen
            lvlList={[
              {
                username: "andronzi",
                firstname: "Андрей",
                lastname: "Радионов",
                lvl: 1,
                exp: 100,
              },
              {
                username: "andronzi",
                firstname: "Андрей",
                lastname: "Радионов",
                lvl: 1,
                exp: 100,
              },
            ]}
          />
          // eslint-disable-next-line prettier/prettier
        )}
        path="/lvltable"
      />
    </Routes>
  );
}

export default App;
