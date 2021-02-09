import React, { ReactNode } from "react";
import "~/styles/styles";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="foreground">
      <div className="p-4 max-w-lg mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
