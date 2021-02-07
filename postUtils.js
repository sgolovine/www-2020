const path = require("path");
const fs = require("fs");
const remark = require("remark");
const html = require("remark-html");
const matter = require("gray-matter");

const postsDirectory = path.resolve(process.cwd(), "data", "posts");

function getPostSlugs() {
  const postSlugs = fs.readdirSync(postsDirectory);
  return postSlugs.map((slug) => slug.replace(".md", ""));
}

async function transformMarkdown(markdown) {
  const res = await remark().use(html).process(markdown);
  return res;
}

function fetchAllPosts(fields) {
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

    return Object.keys(flatPost)
      .filter((item) => fields.includes(item))
      .reduce((acc, item) => {
        return {
          ...acc,
          [item]: flatPost[item],
        };
      }, {});
  });
}

function fetchPost(slug, fields) {
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
  return Object.keys(flatPost)
    .filter((item) => fields.includes(item))
    .reduce((acc, item) => {
      return {
        ...acc,
        [item]: flatPost[item],
      };
    }, {});
}

console.log(fetchAllPosts(["slug", "title"]));
console.log(fetchPost("ten-year-blog", ["slug", "title", "description"]));
