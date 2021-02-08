import Link from "next/link";
import React from "react";
import PageHeader from "~/components/common/PageHeader";
import { fetchAllPosts } from "~/helpers/fetchPosts";
import { PostReturnType } from "~/model/Blog";

type PostListItemProps = {
  title: string;
  date: string;
  description: string;
  slug: string;
  lastChild: boolean;
};

type Props = {
  postsMetadata: PostReturnType[];
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

const BlogEmptyComponent = () => {
  return (
    <div>
      <p>There are no blog posts here yet...</p>
    </div>
  );
};

const Blog: React.FC<Props> = ({ postsMetadata }) => {
  return (
    <>
      <PageHeader headerText="Blog" />
      <div>
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
                lastChild={index === postsMetadata.length - 1}
              />
            );
          })
        )}
      </div>
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

export default Blog;
