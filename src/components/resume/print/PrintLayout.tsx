import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrintLayout: React.FC<Props> = ({ children }) => {
  return <div className="px-12">{children}</div>;
};
