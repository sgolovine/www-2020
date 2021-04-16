import React, { ReactNode } from "react";
import { Routes } from "~/model";
import Link from "next/link";
import { useLinkMatch } from "~/hooks/useLinkMatch";

interface Props {
  children: ReactNode;
}

interface SidebarLinkProps {
  name: string;
  href: string;
  active: boolean;
}

const Header: React.FC = () => {
  return (
    <div className="pr-4 md:pr-0">
      <h1 className="text-3xl">Sunny Golovine</h1>
    </div>
  );
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ name, href, active }) => {
  const className = active ? `text-brand-yellow` : `text-brand-link`;
  return (
    <Link href={href}>
      <a className={className}>{name}</a>
    </Link>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="pr-4 md:pr-0">
      <ul className="block text-right">
        <li className="py-2 uppercase font-bold text-lg">
          <SidebarLink
            name="HOME"
            href={Routes.Home}
            active={useLinkMatch(Routes.Home)}
          />
        </li>
        <li className="py-2 uppercase font-bold text-lg">
          <SidebarLink
            name="BLOG"
            href={Routes.Blog}
            active={useLinkMatch(Routes.Blog)}
          />
        </li>
        <li className="py-2 uppercase font-bold text-lg">
          <SidebarLink
            href={Routes.Resume}
            name="RESUME"
            active={useLinkMatch(Routes.Resume)}
          />
        </li>
        <li className="py-2 uppercase font-bold text-lg">
          <SidebarLink
            href={Routes.Contact}
            name="CONTACT"
            active={useLinkMatch(Routes.Contact)}
          />
        </li>
        <li className="py-2 uppercase font-bold text-lg">
          <SidebarLink
            href={Routes.Guestbook}
            name="GUESTBOOK"
            active={useLinkMatch(Routes.Guestbook)}
          />
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
