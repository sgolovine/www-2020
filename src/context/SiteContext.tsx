import React, { createContext } from "react";
import { ProviderProps, SiteContext } from "~/model";
import links from "@data/site/links.json";
import projects from "@data/site/projects.json";
import about from "@data/site/about.json";
import contact from "@data/site/contact.json";

const contextValue: SiteContext = {
  bio: about.bio,
  links: links.links,
  projects: projects.projects,
  contactInfo: {
    email: contact.email,
    phone: contact.phone,
  },
};

const siteContext = createContext<SiteContext>(contextValue);

export const SiteContextProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <siteContext.Provider value={contextValue}>{children}</siteContext.Provider>
  );
};

export default siteContext;
