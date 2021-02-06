import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrintSectionLayout: React.FC<Props> = ({ children }) => (
  <div className="py-2">{children}</div>
);
