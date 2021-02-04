import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.css";
import Layout from "~/components/Layout";
import Router from "~/routes/Router";

const App = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
