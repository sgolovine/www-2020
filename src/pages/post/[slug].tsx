import React from "react";
import ErrorPage from "next/error";
import {
  fetchPost,
  fetchAllPosts,
  transformMarkdown,
} from "~/helpers/fetchPosts";
import { Post } from "~/model/Blog";
import PostHeader from "~/components/blog/PostHeader";
import PostBody from "~/components/blog/PostBody";
import Layout from "~/components/site/Layout";

type Props = {
  post: Post | null;
};

const PostTemplate: React.FC<Props> = ({ post }) => {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout blogPost>
      <PostHeader
        date={post.date}
        title={post.title}
        description={post.description}
      />
      <PostBody html={post.content} />
    </Layout>
  );
};

// ts-prune-ignore-next
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

// ts-prune-ignore-next
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

// ts-prune-ignore-next
export default PostTemplate;
