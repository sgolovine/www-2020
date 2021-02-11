import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import siteContext from "~/context/SiteContext";
import { isDev } from "~/constants/env";

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
  console.log("development mode: ", process.env.NODE_ENV);

  const renderRoutes = () => {
    return (
      <>
        {navigation.prodRoutes.map((route) => {
          return (
            <HeaderLink key={route.path} link={route.path} name={route.name} />
          );
        })}
      </>
    );
  };

  const renderDevRoutes = () => {
    return (
      <>
        {navigation.devRoutes.map((route) => {
          return (
            <HeaderLink key={route.path} link={route.path} name={route.name} />
          );
        })}
      </>
    );
  };

  return (
    <div className="flex flex-row justify-between mt-4">
      <h1 className="font-bold">Sunny Golovine</h1>
      <div>
        {renderRoutes()}
        {isDev && renderDevRoutes()}
      </div>
    </div>
  );
};

export default Header;
