import React from "react";
import Layout from "~/components/Layout";
import { SiteContextProvider } from "~/context/SiteContext";
import "./tailwind.css";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SiteContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SiteContextProvider>
  );
};

export default App;
