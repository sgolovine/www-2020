import React, { ReactNode } from "react";

const SectionContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="my-12">{children}</div>;
};

export default SectionContainer;
