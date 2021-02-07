export type PostMeta = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

export type PostFields = "title" | "description" | "date" | "slug" | "content";

export type PostReturnType = {
  title: string;
  description: string;
  date: string;
  slug: string;
  content: string;
};
