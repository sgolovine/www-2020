import React, { createContext, ReactNode } from "react";
import { SiteContext } from "~/model/Context";
import links from "@data/links.json";
import projects from "@data/projects.json";
import about from "@data/about.json";

type Props = {
  children: ReactNode;
};

const contextValue: SiteContext = {
  headline: about.headline,
  bio: about.bio,
  links: links,
  projects: projects.projects,
};

const siteContext = createContext<SiteContext>(contextValue);

export const SiteContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <siteContext.Provider value={contextValue}>{children}</siteContext.Provider>
  );
};

export default siteContext;
