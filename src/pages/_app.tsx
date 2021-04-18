import React from "react";
import ContextWrapper from "~/context";
import Layout from "~/components/Layout";
import { AppProps } from "next/app";
import { AnalyticsProvider } from "~/helpers/analytics";

import "~/styles/tailwind.css";
import "~/styles/base.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AnalyticsProvider>
      <ContextWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextWrapper>
    </AnalyticsProvider>
  );
};

// ts-prune-ignore-next
export default App;
