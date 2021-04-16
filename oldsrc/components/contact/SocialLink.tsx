import React, { ReactNode } from "react";
import { SocialLinkTypes } from "~/model/Context";
import * as SocialIcons from "~/components/icons/SocialIcons";
import * as Colors from "~/constants/colors";

type Props = {
  href: string;
  type: SocialLinkTypes;
};

const colors: { [K in SocialLinkTypes]: string } = {
  github: Colors.GITHUB,
  instagram: Colors.INSTAGRAM,
  twitter: Colors.TWITTER,
  linkedin: Colors.LINKEDIN,
  dev: Colors.DEVTO,
};

const icons: {
  [K in SocialLinkTypes]: ({ color }: { color: string }) => JSX.Element;
} = {
  github: SocialIcons.Github,
  instagram: SocialIcons.Instagram,
  twitter: SocialIcons.Twitter,
  linkedin: SocialIcons.LinkedIn,
  dev: SocialIcons.DevDotTo,
};

const SocialLink: React.FC<Props> = ({ href, type }) => {
  const Icon = icons[type];
  const color = colors[type];
  return (
    <div className="w-20 border p-5 m-3 rounded-lg shadow-sm hover:shadow">
      <a href={href}>
        <Icon color={color} />
        {/* <p>{labels[type]}</p> */}
      </a>
    </div>
  );
};

export default SocialLink;
