import React from "react";
import { AppProps } from "next/app";
import Layout from "~/components/Layout";
import "~/styles/tailwind.css";
import "~/styles/base.css";
import ContextWrapper from "~/context";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ContextWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextWrapper>
  );
};

// ts-prune-ignore-next
export default App;
