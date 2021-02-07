export type PostMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};
