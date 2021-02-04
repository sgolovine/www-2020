import React from "react";
import { Switch, Route } from "react-router-dom";
// Pages
import HomePage from "~/routes/home";
import BlogPage from "~/routes/blog";
import ResumePage from "~/routes/resume";
import LinksPage from "~/routes/links";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/blog">
        <BlogPage />
      </Route>
      <Route exact path="/resume">
        <ResumePage />
      </Route>
      <Route exact path="/links">
        <LinksPage />
      </Route>
    </Switch>
  );
};

export default Router;
