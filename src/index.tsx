import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import Layout from "~/components/Layout";
import Router from "~/routes/Router";
import { BrowserRouter } from "react-router-dom";
import { SiteContextProvider } from "~/context/SiteContext";

const App = () => {
  return (
    <SiteContextProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </SiteContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
