import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostMeta } from "~/model/Blog";
import remark from "remark";
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
export function fetchPostMetadata() {
  // Get the top level posts directory
  const postsDirectory = path.resolve(process.cwd(), "data", "posts");

  // Read all the folders in the posts directory
  const postFolders = fs.readdirSync(postsDirectory);

  // Reduce posts
  return postFolders.reduce((acc: PostMeta[], item: string) => {
    // Get the post path. This assumes that the post will always be named `post.md`
    // And is always inside of a folder.
    const postPath = path.resolve(postsDirectory, item, "post.md");
    // Read the contents and parse, we use matter here to return
    // An object from front-matter and content of the post
    const postContents = fs.readFileSync(postPath, "utf-8");
    const parsedContents = matter(postContents);
    // Before returning we groom the response
    // Flatten the object and remove an unused keys
    return [
      ...acc,
      {
        title: parsedContents.data.title,
        description: parsedContents.data.description,
        date: parsedContents.data.date,
        postSlug: parsedContents.data.slug,
        folderSlug: item,
      },
    ];
  }, []);
}
