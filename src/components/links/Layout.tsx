import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#3498db",
      }}
    >
      <div className="foreground">
        <div className="p-4 max-w-lg mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
