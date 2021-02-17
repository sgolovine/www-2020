import React from "react";
import { AppProps } from "next/app";
import Layout from "~/components/site/Layout";
import { SiteContextProvider } from "~/context/SiteContext";
import { ResumeContextProvider } from "~/context/ResumeContext";

import "~/styles/tailwind.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SiteContextProvider>
      <ResumeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ResumeContextProvider>
    </SiteContextProvider>
  );
};

// ts-prune-ignore-next
export default App;
