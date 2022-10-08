import React from "react";

const NavigationBar = (): JSX.Element => (
  <div className="navbar">
    <ul className="navbar__list flex">
      <li className="navbar__item font-nunito ml-4 cursor-pointer">
        Activities
      </li>

      <li className="navbar__item font-nunito ml-4 cursor-pointer">
        Marketplace
      </li>

      <li className="navbar__item font-nunito ml-4 cursor-pointer">Transfer</li>
    </ul>
  </div>
);

export default NavigationBar;
