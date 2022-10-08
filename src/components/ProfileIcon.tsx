import React from "react";
import profileIcon from "@images/ProfileIcon.svg";

const ProfileIcon = (): JSX.Element => (
  <div className="profile-icon m-3">
    <img
      alt="profile-icon"
      className="profile-icon"
      src={profileIcon}
    />
  </div>
);

export default ProfileIcon;
