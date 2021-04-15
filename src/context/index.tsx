import React, { ReactNode } from "react";
import ResumeContext, { ResumeContextProvider } from "./ResumeContext";
import SiteContext, { SiteContextProvider } from "./SiteContext";

interface Props {
  children: ReactNode;
}

const ContextWrapper: React.FC<Props> = ({ children }) => {
  return (
    <SiteContextProvider>
      <ResumeContextProvider>{children}</ResumeContextProvider>
    </SiteContextProvider>
  );
};

export default ContextWrapper;

export { ResumeContext, SiteContext };
