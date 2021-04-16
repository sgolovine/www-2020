import Link from "next/link";
import React from "react";
import { Section } from "~/components/Section";
import { Header } from "~/components/Typography";
import { fetchAllPosts } from "~/helpers/fetchPosts";
import { PostReturnType } from "~/model";

type Props = {
  postsMetadata: PostReturnType[];
};

interface PostProps {
  post: PostReturnType;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  const getSlug = (slug: string) => `/blog/post/${slug}`;

  return (
    <div className="pb-12">
      <div className="py-2 flex flex-row justify-between items-center">
        <Link href={getSlug(post.slug)}>
          <a className="text-lg text-brand-yellow font-medium">{post.title}</a>
        </Link>
        <p className="text-xs text-gray-500">{post.date}</p>
      </div>
      <p>{post.description}</p>
    </div>
  );
};

const BlogPage: React.FC<Props> = ({ postsMetadata }) => {
  return (
    <>
      <Header>Posts</Header>
      <Section>
        {postsMetadata.map((post, index) => {
          return <PostItem post={post} key={index} />;
        })}
      </Section>
    </>
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

export default BlogPage;
