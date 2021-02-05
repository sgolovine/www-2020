import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col">
      <div className="h-16 px-4">
        <Header />
      </div>
      <div className="p-4">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
