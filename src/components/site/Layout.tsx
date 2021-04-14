import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { noHeaderRoutes } from "~/constants/pageHeaders";
import Footer from "./Footer";
import Header from "./Header";
import SocialHeader from "./SocialHeader";

type Props = {
  children: ReactNode;
  blogPost?: boolean;
};

const BlogLayout: React.FC<Pick<Props, "children">> = ({ children }) => (
  <div className="container mx-auto flex flex-col min-h-screen">{children}</div>
);

const PageLayout: React.FC<Pick<Props, "children">> = ({ children }) => (
  <div className="max-w-xl mx-auto flex flex-col min-h-screen">{children}</div>
);

const Layout: React.FC<Props> = ({ children, blogPost }) => {
  const router = useRouter();
  const pathName = router.pathname;
  const shouldShowHeader = !noHeaderRoutes.includes(pathName);

  const ContainerComponent = blogPost ? BlogLayout : PageLayout;

  return (
    <ContainerComponent>
      <div className="max-w-xl w-full mx-auto">
        {shouldShowHeader && (
          <header className="h-18 px-4">
            <SocialHeader />
            <Header />
          </header>
        )}
      </div>
      <main className="flex-grow p-4">{children}</main>
      <footer className="py-4">
        <Footer />
      </footer>
    </ContainerComponent>
  );
};

export default Layout;
