// Script to delete a post from the posts directory
const args = process.argv;
const path = require("path");
const fs = require("fs");

if (args.length < 3) {
  console.log("Please enter a name for this post");
  process.exit(1);
}

const postName = args[2];

const postPath = path.resolve(process.cwd(), "posts", `${postName}.md`);

try {
  if (fs.existsSync(postPath)) {
    fs.rmSync(postPath);
  } else {
    console.log("Could not delete post, the file does not exist!");
    process.exit(1);
  }
} catch (e) {
  console.log("ERR: An unspecified error occurred.");
  process.exit(1);
}

console.log(`
Post Deleted Successfully
---
Path: ${postPath}
Name: ${postName}
`);

process.exit(0);
