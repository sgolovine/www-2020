import React, { ReactNode } from "react";

const ContentContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mx-2 my-1">{children}</div>;
};

export default ContentContainer;
