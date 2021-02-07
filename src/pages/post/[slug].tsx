import React from "react";
import ErrorPage from "next/error";
import { fetchPost, fetchPostsMetadata } from "~/helpers/fetchPosts";
import { Post } from "~/model/Blog";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  post: Post | null;
  error: boolean;
};

const PostTemplate: React.FC<Props> = ({ post, error }) => {
  if (!post || error) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(post);
  return (
    <div>
      <h1>Post template Page</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context?.params?.slug) {
    const filePath = `${context.params.slug}.md`;
    const rawPost = await fetchPost(filePath);

    return {
      props: {
        post: rawPost,
        error: false,
      },
    };
  } else {
    return {
      props: {
        post: null,
        error: true,
      },
    };
  }
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       { params: { slug: "resume-as-a-service" } },
//       { params: { slug: "ten-year-blog" } },
//     ],
//     fallback: false,
//   };
// };

export default PostTemplate;
