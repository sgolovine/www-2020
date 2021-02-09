import React from "react";
import * as socialIcons from "~/components/icons/SocialIcons";

export type Icons = keyof typeof icons;

const icons = {
  twitter: socialIcons.Twitter,
  github: socialIcons.Github,
  instagram: socialIcons.Instagram,
  linkedin: socialIcons.LinkedIn,
  snapchat: socialIcons.Snapchat,
  email: socialIcons.Mail,
  resume: socialIcons.Resume,
};

type Props = {
  name: string;
  href: string;
  itemKey: Icons;
};

export const LinkButton = ({ name, href, itemKey }: Props) => {
  const ButtonIcon = icons[itemKey];
  return (
    <a
      className={`bg-${itemKey} py-4 my-2 bg-blue-300 shadow-lg rounded-md text-center font-bold`}
      key={itemKey}
      href={href}
    >
      <div className="flex flex-row items-center justify-center">
        <div className="w-8">
          <ButtonIcon color="#fff" />
        </div>
        <p className="w-32 text-gray-200">{name}</p>
      </div>
    </a>
  );
};
