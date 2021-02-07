export type Post = {
  title: string;
  description: string;
  date: string;
  postSlug: string;
  content: string;
};

export type PostMeta = Pick<
  Post,
  "title" | "description" | "date" | "postSlug"
> & {
  folderSlug: string;
};
