import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type HeaderLinkProps = {
  name: string;
  link: string;
};

export const HeaderLink: React.FC<HeaderLinkProps> = ({ link, name }) => {
  const router = useRouter();
  const isActive = router.pathname === link;
  return (
    <Link href={link}>
      <a
        className={`mx-2 text-sm font-semibold ${
          isActive && "text-blue-600"
        } hover:text-blue-600`}
      >
        {name}
      </a>
    </Link>
  );
};

const Header = () => {
  return (
    <div className="flex flex-row justify-between mt-4">
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
