import React from "react";
import { profilePictureSrc } from "~/constants/profilePicture";

type Props = {
  headline: string;
};

const ProfilePicture: React.FC<Props> = ({ headline }) => {
  return (
    <div className="max-w-xs mx-auto text-center">
      <img
        src={profilePictureSrc}
        alt="Profile Picture"
        width={256}
        height={256}
      />
      <h1 className="text-3xl mt-6">{headline}</h1>
    </div>
  );
};

export default ProfilePicture;
