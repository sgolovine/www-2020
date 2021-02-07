import React from "react";
import Image from "next/image";
import { profilePictureSrc } from "~/constants/profilePicture";

type Props = {
  headline: string;
};

const ProfilePicture: React.FC<Props> = ({ headline }) => {
  return (
    <div className="max-w-xs mx-auto text-center">
      <Image
        src={profilePictureSrc}
        alt="Profile Picture"
        width={256}
        height={256}
        layout="fixed"
      />
      <h1 className="text-3xl mt-6">{headline}</h1>
    </div>
  );
};

export default ProfilePicture;
