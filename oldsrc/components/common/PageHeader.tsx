import React from "react";

type Props = {
  headerText: string;
};

const PageHeader: React.FC<Props> = ({ headerText }) => {
  return (
    <div className="pt-6">
      <h1 className="text-2xl font-bold">{headerText}</h1>
    </div>
  );
};

export default PageHeader;
