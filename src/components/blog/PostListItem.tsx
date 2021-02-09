import Link from "next/link";
import React from "react";

type PostListItemProps = {
  title: string;
  date: string;
  description: string;
  slug: string;
  lastChild: boolean;
};

const PostListItem: React.FC<PostListItemProps> = ({
  title,
  date,
  description,
  slug,
  lastChild,
}) => {
  // The normal slug contains the full filename
  // While useful, remove from path.
  const url = `/post/${slug.replace(".md", "")}`;
  return (
    <>
      <div className="py-6">
        <div className="flex flex-col sm:flex-row pb-4 sm:pb-initial justify-between">
          <Link href={url}>
            <a className="sm:text-xl text-lg font-bold sm:pb-4 hover:text-blue-700">
              {title}
            </a>
          </Link>
          <p className="text-gray-600">{date}</p>
        </div>
        <div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      {!lastChild && <hr />}
    </>
  );
};

export default PostListItem;
