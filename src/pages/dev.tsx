import React from "react";
import PageHeader from "~/components/common/PageHeader";

const DevPage = () => {
  return (
    <div>
      <PageHeader headerText="Hidden Dev Page" />
      <p>
        This page is only visible in development mode. Use as a sandbox or put
        dev stuff here
      </p>
    </div>
  );
};

export default DevPage;
