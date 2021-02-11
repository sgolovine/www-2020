const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Get the posts directory
const postsDirectory = path.resolve(process.cwd(), "posts");

// List all the files in the directory
const allFiles = fs.readdirSync(postsDirectory);

// Filter out any files that are no in .md format
const postSlugs = allFiles.filter((item) => item.includes(".md"));

// Print out all posts that we found
console.log("\nPOSTS\n----------------");
postSlugs.forEach((item) => {
  const postContents = fs.readFileSync(path.resolve(postsDirectory, item));
  const parsedContents = matter(postContents);

  const printString = `${parsedContents.data.date} - ${parsedContents.data.title}`;

  console.log(printString);
});
console.log("\n");
