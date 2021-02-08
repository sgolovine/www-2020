import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostReturnType } from "~/model/Blog";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.resolve(process.cwd(), "posts");

// TODO: Markdown type should be VComptable.
// package needs to be patched to expose this type
export async function transformMarkdown(markdown: any) {
  const res = await remark().use(html).process(markdown);
  return res.toString();
}

export function getPostSlugs() {
  const allFiles = fs.readdirSync(postsDirectory);
  const postSlugs = allFiles.filter((item) => item.includes(".md"));
  return postSlugs.map((slug) => slug.replace(".md", ""));
}

export function fetchAllPosts(): PostReturnType[] {
  const postSlugs = getPostSlugs();
  const flatPosts: PostReturnType[] = postSlugs.map((slug) => {
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
  const sortedFlatPosts = flatPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  return sortedFlatPosts;
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
