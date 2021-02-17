import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import siteContext from "~/context/SiteContext";

type HeaderLinkProps = {
  name: string;
  link: string;
};

const HeaderLink: React.FC<HeaderLinkProps> = ({ link, name }) => {
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
  const { navigation } = useContext(siteContext);

  return (
    <div className="flex flex-row justify-between mt-4">
      <h1 className="font-bold">Sunny Golovine</h1>
      <div>
        {navigation.map((route) => {
          return (
            <HeaderLink key={route.path} link={route.path} name={route.name} />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
