import React from "react";
import "@style/_all.scss";
import LoginScreen from "@src/Components/LoginScreen";
import { Route, Routes } from "react-router-dom";
import Transfer from "@components/TransferScreen";
import ActivitiesScreen from "@components/ActivitiesScreen";
import UserScreen from "@components/UserScreen";
import MarketPlace from "@components/MarketPlaceScreen";

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
    </Routes>
  );
}

export default App;
