import React from "react";
import { AppProps } from "next/app";
import Layout from "~/components/Layout";
import "~/styles/tailwind.css";
import "~/styles/base.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

// ts-prune-ignore-next
export default App;
