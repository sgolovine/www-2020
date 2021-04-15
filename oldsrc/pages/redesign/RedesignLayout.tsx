import React, { ReactNode } from "react";

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
    <div>
      <h1 className="text-3xl">Sunny Golovine</h1>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div>
      <ul className="text-right">
        <li className="py-2 uppercase font-bold text-lg">About</li>
        <li className="py-2 uppercase font-bold text-lg">Blog</li>
        <li className="py-2 uppercase font-bold text-lg">Resume</li>
        <li className="py-2 uppercase font-bold text-lg">Contact</li>
        <li className="py-2 uppercase font-bold text-lg">Guestbook</li>
      </ul>
    </div>
  );
};

const RedesignLayout: React.FC = ({ children }) => {
  return (
    // Outer Container
    <div className="max-w-3xl mx-auto py-6">
      {/* Header */}
      <div className="text-right py-16">
        <Header />
      </div>

      {/* Primary Content */}
      <div className="flex flex-row">
        {/* Sidebar */}
        <div className="px-10">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RedesignLayout;
