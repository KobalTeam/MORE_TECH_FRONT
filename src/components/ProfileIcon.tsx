import React from "react";
import Logo from "@images/Logo.svg";

const ProfileIcon = (): JSX.Element => (
  <div className="profile_icon">
    <img
      src={Logo}
      alt="ProfileIcon"
    />
  </div>
);

export default ProfileIcon;
