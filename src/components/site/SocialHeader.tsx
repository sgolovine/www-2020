import Link from "next/link";
import React, { useContext } from "react";
import siteContext from "~/context/SiteContext";
import { Github, Instagram, LinkedIn } from "../icons/SocialIcons";

const SocialHeader = () => {
  const context = useContext(siteContext);
  return (
    <div className="flex flex-row justify-end pt-2">
      <a href={context.links.github} className="mx-1">
        <div className="w-6 p-1 rounded bg-github">
          <Github />
        </div>
      </a>
      <a href={context.links.linkedin} className="mx-1">
        <div className="w-6 p-1 rounded bg-linkedin">
          <LinkedIn />
        </div>
      </a>
      <a href={context.links.instagram} className="mx-1">
        <div className="w-6 p-1 rounded bg-instagram">
          <Instagram />
        </div>
      </a>
      <Link href="/guestbook">
        <a className="text-xs flex flex-row justify-center items-center px-2 bg-blue-500 text-white font-bold rounded shadow">
          Guestbook
        </a>
      </Link>
    </div>
  );
};

export default SocialHeader;
