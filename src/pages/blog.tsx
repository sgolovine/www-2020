import Link from "next/link";
import React from "react";
import { fetchPostMetadata } from "~/helpers/fetchPosts";
import { PostMeta } from "~/model/Blog";

type PostListItemProps = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

type Props = {
  postMeta: PostMeta[];
};

const PostListItem: React.FC<PostListItemProps> = ({
  title,
  date,
  description,
  slug,
}) => {
  const url = `/post/${slug}`;
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

const Blog: React.FC<Props> = ({ postMeta }) => {
  console.log(postMeta);
  return (
    <div>
      <h1 className="text-3xl">Blog</h1>
      <p>I post here occasionally about a variety of topics.</p>
      <div className="py-4">
        {postMeta.map((post, index) => {
          return (
            <PostListItem
              key={`${post.postSlug}-${index}`}
              title={post.title}
              date={post.date}
              description={post.description}
              slug={post.postSlug}
            />
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const postMeta = fetchPostMetadata();
  return {
    props: {
      postMeta,
    },
  };
}

export default Blog;
