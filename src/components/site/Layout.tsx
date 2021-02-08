import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageHeader from "./PageHeader";
import SocialHeader from "./SocialHeader";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className="max-w-3xl mx-auto flex flex-col min-h-screen">
    <header className="h-32 px-4">
      <SocialHeader />
      <Header />
      <PageHeader />
    </header>
    <main className="flex-grow p-4">{children}</main>
    <footer className="py-4">
      <Footer />
    </footer>
  </div>
);

export default Layout;
