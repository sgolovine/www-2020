import Link from "next/link";
import React from "react";
import { fetchAllPosts } from "~/helpers/fetchPosts";
import { PostReturnType } from "~/model/Blog";

type PostListItemProps = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

type Props = {
  postsMetadata: PostReturnType[];
};

const PostListItem: React.FC<PostListItemProps> = ({
  title,
  date,
  description,
  slug,
}) => {
  // The normal slug contains the full filename
  // While useful, remove from path.
  const url = `/post/${slug.replace(".md", "")}`;
  return (
    <Link href={url}>
      <div className="border px-4 py-2 my-2 rounded hover:shadow cursor-pointer">
        <div className="flex flex-row justify-between items-center">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm">{date}</p>
        </div>
        <p className="p-2">{description}</p>
      </div>
    </Link>
  );
};

const BlogEmptyComponent = () => {
  return (
    <div>
      <p>There are no blog posts here yet...</p>
    </div>
  );
};

const Blog: React.FC<Props> = ({ postsMetadata }) => {
  return (
    <div>
      <div className="py-4">
        {postsMetadata.length === 0 ? (
          <BlogEmptyComponent />
        ) : (
          postsMetadata.map((post, index) => {
            return (
              <PostListItem
                key={`${post.slug}-${index}`}
                title={post.title}
                date={post.date}
                description={post.description}
                slug={post.slug}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export function getStaticProps() {
  const postsMetadata = fetchAllPosts();
  return {
    props: {
      postsMetadata,
    },
  };
}

export default Blog;
