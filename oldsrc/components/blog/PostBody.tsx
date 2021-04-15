import React from "react";

type Props = {
  html: string;
};

const PostBody: React.FC<Props> = ({ html }) => {
  return (
    <div>
      <article className="prose mx-auto">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  );
};

export default PostBody;
