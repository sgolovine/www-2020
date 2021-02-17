import React from "react";
import BlogEmpty from "~/components/blog/BlogEmpty";
import PostListItem from "~/components/blog/PostListItem";
import PageHeader from "~/components/common/PageHeader";
import { fetchAllPosts } from "~/helpers/fetchPosts";
import { PostReturnType } from "~/model/Blog";

type Props = {
  postsMetadata: PostReturnType[];
};

const Blog: React.FC<Props> = ({ postsMetadata }) => {
  return (
    <>
      <PageHeader headerText="Blog" />
      <div>
        {postsMetadata.length === 0 ? (
          <BlogEmpty />
        ) : (
          postsMetadata.map((post, index) => {
            return (
              <PostListItem
                key={`${post.slug}-${index}`}
                title={post.title}
                date={post.date}
                description={post.description}
                slug={post.slug}
                lastChild={index === postsMetadata.length - 1}
              />
            );
          })
        )}
      </div>
    </>
  );
};

// ts-prune-ignore-next
export function getStaticProps() {
  const postsMetadata = fetchAllPosts();
  return {
    props: {
      postsMetadata,
    },
  };
}

// ts-prune-ignore-next
export default Blog;
