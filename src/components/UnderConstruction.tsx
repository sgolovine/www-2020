import React from "react";

type Props = {
  pageName: string;
};

const UnderConstruction: React.FC<Props> = ({ pageName }) => {
  return (
    <div>
      <h1>This page is still under construction</h1>
      <p>Please check back later for more progress</p>
      <p>Page: {pageName}</p>
    </div>
  );
};

export default UnderConstruction;
