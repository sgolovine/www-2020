import React, { useEffect } from "react";
import ErrorPage from "next/error";
import {
  fetchPost,
  fetchAllPosts,
  transformMarkdown,
} from "~/helpers/fetchPosts";
import { Post } from "~/model/Blog";
import { Header } from "~/components/Typography";
import { useAnalytics } from "~/hooks/useAnalytics";

type Props = {
  post: Post | null;
};

const PostTemplate: React.FC<Props> = ({ post }) => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView({
      title: "Blog Post Page",
    });
  }, []);

  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <div className="pb-6">
        <div className="flex flex-row justify-between">
          <Header>{post.title}</Header>
          <p className="text-sm">{new Date(post.date).toLocaleDateString()}</p>
        </div>
        <p className="text-sm">{post.description}</p>
      </div>
      <hr />

      <article className="prose mx-auto">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
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
