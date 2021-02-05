import React, { createContext, ReactNode } from "react";
import { SiteContext } from "~/model/Context";
import links from "@data/links.json";
import projects from "@data/projects.json";

type Props = {
  children: ReactNode;
};

const siteContext = createContext<SiteContext>({
  links: links,
  projects: projects.projects,
});

const { Provider, Consumer } = siteContext;

const SiteContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <Provider value={{ links: links, projects: projects.projects }}>
      {children}
    </Provider>
  );
};

export { SiteContextProvider, Consumer as SiteContextConsumer };
