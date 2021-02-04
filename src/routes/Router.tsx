import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import HomePage from "~/routes/home";
import BlogPage from "~/routes/blog";
import ResumePage from "~/routes/resume";
import LinksPage from "~/routes/links";

const Router = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Router;
