import React from "react";
import Layout from "~/components/site/Layout";
import { SiteContextProvider } from "~/context/SiteContext";
import { ResumeContextProvider } from "~/context/ResumeContext";
import "~/styles/tailwind.css";
import { AppProps } from "next/app";

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

export default App;
