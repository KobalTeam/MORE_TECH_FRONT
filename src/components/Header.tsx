import React from "react";
import Logo from "@images/Logo.svg";
import Search from "@components/Search";
import NavigationBar from "@components/NavigationBar";
import ProfileIcon from "@components/ProfileIcon";

const Header = (): JSX.Element => (
  <div className="main_header">
    <img
      alt="Logo"
      className="logo"
      src={Logo}
    />

    <Search />

    <NavigationBar />

    <ProfileIcon />
  </div>
);

export default Header;
