import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostFields, PostReturnType } from "~/model/Blog";
import remark, { parse } from "remark";
import html from "remark-html";

// TODO: Markdown type should be VComptable.
// package needs to be patched to expose this type
export async function transformMarkdown(markdown: any) {
  const res = await remark().use(html).process(markdown);
  return res.toString();
}

// We want to load each post once the user has landed on the page
// This function will give us just the metadata from each post
// As well as the full path to the post so we know where to get the data
// Once the user clicks on the post.
// export function fetchPostsMetadata() {
//   // Get the top level posts directory
//   const postsDirectory = path.resolve(process.cwd(), "data", "posts");

//   // Read all the folders in the posts directory
//   const postSlugs = fs.readdirSync(postsDirectory);

//   // Reduce posts
//   return postSlugs.reduce((acc: PostMeta[], slug: string) => {
//     // Get the post path. This assumes that the post will always be named `post.md`
//     // And is always inside of a folder.
//     const postPath = path.resolve(postsDirectory, slug);
//     // Read the contents and parse, we use matter here to return
//     // An object from front-matter and content of the post
//     const postContents = fs.readFileSync(postPath, "utf-8");
//     const parsedContents = matter(postContents);
//     // Before returning we groom the response
//     // Flatten the object and remove an unused keys
//     const post: PostMeta = {
//       title: parsedContents.data.title,
//       description: parsedContents.data.description,
//       date: parsedContents.data.date,
//       slug,
//     };
//     return [...acc, post];
//   }, []);
// }

// export async function fetchPost(postSlug: string): Promise<Post> {
//   const postPath = path.resolve(process.cwd(), "data", "posts", postSlug);
//   const content = fs.readFileSync(postPath, "utf-8");
//   const parsedContents = matter(content);
//   const transformedMarkdown = await transformMarkdown(parsedContents.content);

//   return {
//     title: parsedContents.data.title,
//     description: parsedContents.data.description,
//     date: parsedContents.data.date,
//     content: transformedMarkdown,
//     slug: postSlug,
//   };
// }

const postsDirectory = path.resolve(process.cwd(), "data", "posts");

export function getPostSlugs() {
  const postSlugs = fs.readdirSync(postsDirectory);
  return postSlugs.map((slug) => slug.replace(".md", ""));
}

export function fetchAllPosts(): PostReturnType[] {
  const postSlugs = getPostSlugs();
  return postSlugs.map((slug) => {
    const postPath = path.resolve(postsDirectory, `${slug}.md`);
    const postContents = fs.readFileSync(postPath);
    const parsedContents = matter(postContents);
    const flatPost = {
      title: parsedContents.data.title,
      description: parsedContents.data.description,
      date: parsedContents.data.date,
      slug,
      content: parsedContents.content,
    };
    return flatPost;
  });
}

export function fetchPost(slug: string): PostReturnType {
  const postPath = path.resolve(postsDirectory, `${slug}.md`);
  const postContents = fs.readFileSync(postPath);
  const parsedContents = matter(postContents);
  const flatPost = {
    title: parsedContents.data.title,
    description: parsedContents.data.description,
    date: parsedContents.data.date,
    slug,
    content: parsedContents.content,
  };
  return flatPost;
}
