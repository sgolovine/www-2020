import React, { ReactNode } from "react";

const SectionContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="my-6">{children}</div>;
};

export default SectionContainer;
