import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = (): JSX.Element => (
  <div className="navbar">
    <ul className="navbar__list flex">
      <li className="navbar__item font-nunito ml-4 cursor-pointer">
        <Link to="/activities">Activities</Link>
      </li>

      <li className="navbar__item font-nunito ml-4 cursor-pointer">
        <Link to="/market">Marketplace</Link>
      </li>

      <li className="navbar__item font-nunito ml-4 cursor-pointer">
        <Link to="/transfer">Transfer</Link>
      </li>
    </ul>
  </div>
);

export default NavigationBar;
