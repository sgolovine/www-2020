import React from "react";
import { Link } from "react-router-dom";
import UnderConstruction from "~/components/UnderConstruction";

export default () => {
  return (
    <div>
      <UnderConstruction pageName="home" />
      <Link to="/blog">Blog</Link>
    </div>
  );
};
