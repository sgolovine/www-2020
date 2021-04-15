import React, { ReactNode } from "react";
import { Routes } from "~/model";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

/**
 * HEADER
 * ------------------------------
 * SIDEBAR |
 * SIDEBAR |
 * SIDEBAR | .   PRIMARY CONTENT
 * SIDEBAR |
 * SIDEBAR |
 */

const Header: React.FC = () => {
  return (
    <div className="pr-4 md:pr-0">
      <h1 className="text-3xl">Sunny Golovine</h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="pr-4 md:pr-0">
      <ul className="block text-right">
        <li className="py-2 uppercase font-bold text-lg">
          <Link href={Routes.Home}>HOME</Link>
        </li>
        {/* <li className="py-2 uppercase font-bold text-lg">
          <Link href={Routes.About}>ABOUT</Link>
        </li> */}
        <li className="py-2 uppercase font-bold text-lg">
          <Link href={Routes.Blog}>BLOG</Link>
        </li>
        <li className="py-2 uppercase font-bold text-lg">
          <Link href={Routes.Resume}>RESUME</Link>
        </li>
        <li className="py-2 uppercase font-bold text-lg">
          <Link href={Routes.Contact}>CONTACT</Link>
        </li>
        <li className="py-2 uppercase font-bold text-lg">
          <Link href={Routes.Guestbook}>GUESTBOOK</Link>
        </li>
      </ul>
    </div>
  );
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    // Outer Container
    <div className="max-w-3xl mx-auto py-6">
      {/* Header */}
      <div className="text-right py-16">
        <Header />
        <div className="block md:hidden">
          <Sidebar />
        </div>
      </div>

      {/* Primary Content */}
      <div className="flex flex-row">
        {/* Sidebar */}
        <div className="px-10 hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full px-4 md:px-0">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
