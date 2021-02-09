import React, { createContext, ReactNode } from "react";
import linksData from "@data/links/data.json";
import { LinksContextValue } from "~/model/Links";
import { Icons } from "~/components/links/LinkButton";

type Props = {
  children: ReactNode;
};

const contextValue: LinksContextValue = {
  name: linksData.name,
  bio: linksData.bio,
  location: linksData.location,
  email: linksData.email,
  phone: linksData.phone,
  links: linksData.links.map((item) => {
    return {
      ...item,
      key: item.key as Icons,
    };
  }),
  vcard: linksData.vcard,
};

const linksContext = createContext<LinksContextValue>(contextValue);

export const LinksContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <linksContext.Provider value={contextValue}>
      {children}
    </linksContext.Provider>
  );
};

export default linksContext;
