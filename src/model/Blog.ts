export type Post = {
  title: string;
  description: string;
  date: string;
  slug: string;
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
