import React from "react";
const profileImage = require("~/img/profile-face.png");

export const Avatar = () => {
  return (
    <div className="avatar">
      <img src={profileImage} alt="Profile Picture" />
    </div>
  );
};
