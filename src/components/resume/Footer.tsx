import React from "react";
import { OutboundLink } from "./OutboundLink";

type Props = {};

export const Footer: React.FC<Props> = ({}) => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center pt-12">
      <p className="text-sm font-extralight">{year} Sunny Golovine</p>
      <OutboundLink
        href="https://github.com/sgolovine/resume"
        name="Source code on Github"
        className="text-sm"
      />
    </div>
  );
};
