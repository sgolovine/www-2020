import React from "react";
const profileImage = require("~/img/profile-face.jpg");

type Props = {
  headline: string;
};

const ProfilePicture: React.FC<Props> = ({ headline }) => {
  return (
    <div className="max-w-xs mx-auto text-center">
      <img src={profileImage} alt="Profile Picture" />
      <h1 className="text-3xl mt-6">{headline}</h1>
    </div>
  );
};

export default ProfilePicture;
