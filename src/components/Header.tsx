import React from "react";
import { Link } from "react-router-dom";
import Logo from "@images/Logo.svg";
import Search from "@components/Search";
import NavigationBar from "@components/NavigationBar";
import ProfileIcon from "@components/ProfileIcon";

const Header = (): JSX.Element => (
  <div className="header bg-blue-200 h-20 flex items-center p-4">
    <Link to="/user">
      <img
        alt="Logo"
        className="logo"
        src={Logo}
      />
    </Link>

    <Search />

    <NavigationBar />

    <ProfileIcon />
  </div>
);

export default Header;
