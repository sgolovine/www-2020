import React from "react";
import { AppProps } from "next/app";
import Layout from "~/components/site/Layout";
import { SiteContextProvider } from "~/context/SiteContext";
import { ResumeContextProvider } from "~/context/ResumeContext";
import { LinksContextProvider } from "~/context/LinksContext";

import "~/styles/tailwind.css";
import "~/styles/links.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SiteContextProvider>
      <ResumeContextProvider>
        <LinksContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LinksContextProvider>
      </ResumeContextProvider>
    </SiteContextProvider>
  );
};

export default App;
