import React from "react";
import { Link, useLocation } from "react-router-dom";

type HeaderLinkProps = {
  name: string;
  link: string;
};

export const HeaderLink: React.FC<HeaderLinkProps> = ({ link, name }) => {
  // Use the useLocation hook here rather than
  // window.location b/c of client side routing
  const location = useLocation();
  const isActive = location.pathname === link;
  return (
    <Link
      className={`mx-2 text-sm font-semibold ${
        isActive && "text-blue-600"
      } hover:text-blue-600`}
      to={link}
    >
      {name}
    </Link>
  );
};

const Header = () => {
  return (
    <div className="flex flex-row h-full justify-between items-center">
      <h1 className="font-bold">Sunny Golovine</h1>
      <div>
        <HeaderLink name="Home" link="/" />
        <HeaderLink name="Blog" link="/blog" />
        <HeaderLink name="Resume" link="/resume" />
      </div>
    </div>
  );
};

export default Header;
