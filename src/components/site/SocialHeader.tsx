import React from "react";
import { Github, Instagram, LinkedIn } from "../icons/SocialIcons";

const SocialHeader = () => {
  return (
    <div className="flex flex-row justify-end pt-2">
      <a href="#" className="mx-1">
        <div className="w-6 p-1 rounded bg-github">
          <Github />
        </div>
      </a>
      <a href="#" className="mx-1">
        <div className="w-6 p-1 rounded bg-linkedin">
          <LinkedIn />
        </div>
      </a>
      <a href="#" className="mx-1">
        <div className="w-6 p-1 rounded bg-instagram">
          <Instagram />
        </div>
      </a>
    </div>
  );
};

export default SocialHeader;
