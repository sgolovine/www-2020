import Link from "next/link";
import React from "react";
import { sidebarRoutes } from "~/defines/navigation";
import { useLinkMatch } from "~/hooks/useLinkMatch";

interface SidebarLinkProps {
  name: string;
  href: string;
  active: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ name, href, active }) => {
  const className = active ? `text-brand-yellow` : `text-brand-link`;
  return (
    <Link href={href}>
      <a className={className}>{name}</a>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  const enabledRoutes = sidebarRoutes.filter((route) => route.enabled);
  return (
    <div className="pr-4 md:pr-0">
      <ul className="block text-right">
        {enabledRoutes.length > 0 &&
          enabledRoutes.map((route) => {
            return (
              <li className="py-2 uppercase font-bold text-lg" key={route.key}>
                <SidebarLink
                  name={route.name.toUpperCase()}
                  href={route.route}
                  active={useLinkMatch(route.route)}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
