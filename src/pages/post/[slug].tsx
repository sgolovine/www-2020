import React from "react";
import ErrorPage from "next/error";
import {
  fetchPost,
  fetchAllPosts,
  transformMarkdown,
} from "~/helpers/fetchPosts";
import { Post } from "~/model/Blog";

type Props = {
  post: Post | null;
};

const PostTemplate: React.FC<Props> = ({ post }) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <p className="text-sm text-gray-700">{post.date}</p>
        <p className="text-sm text-gray-700">By Sunny Golovine</p>
        <h1 className="text-3xl font-semibold py-4">{post.title}</h1>
        <p className="text-sm text-gray-700">{post.description}</p>
      </div>
    </div>
  );
};

export async function getStaticProps(context: { params: { slug: string } }) {
  const post = fetchPost(context.params.slug);
  const content = await transformMarkdown(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = fetchAllPosts();

  return {
    paths: posts.map((item) => {
      return {
        params: {
          slug: item.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default PostTemplate;
