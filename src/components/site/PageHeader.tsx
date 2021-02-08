import React from "react";
import { useRouter } from "next/router";
import { noHeaderRoutes, pageHeaders } from "~/constants/pageHeaders";

const PageHeader = () => {
  const router = useRouter();
  const pathName = router.pathname as keyof typeof pageHeaders;
  const headerText = pageHeaders[pathName];

  if (noHeaderRoutes.includes(router.pathname)) {
    return null;
  }
  return (
    <div className="pt-6">
      <h1 className="text-2xl font-bold">{headerText}</h1>
    </div>
  );
};

export default PageHeader;
