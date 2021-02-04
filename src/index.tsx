import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import Layout from "~/components/Layout";
import Router from "~/routes/Router";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
