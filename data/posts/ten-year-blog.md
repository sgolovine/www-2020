---
title: The 10 Year Blog
description: Getting into blogging and making software last
date: Dec 22, 2020
---

Earlier this month I decided to start a blog. I had an ocean of options for how
to go about this. From blogging platfoms like Medium or Substack to CMS based
options like Wordpress and Ghost, or I could go the route of building something
from scratch.

The plan for this blog is to be long running, like 10+ years long running. So
with this requirement in mind, you have to make some special considerations. If
I went with a service like Substack or Medium, what would those services look
like in 10 years? Will they still be around? Will they still cost the same? What
about features?

From there I considered platforms like Wordpress that I could host myself,
Wordpress and it's competitors. I've never been a fan of Wordpress and the
problem I kept running up against with self hosted blogging platforms was how
the data was stored? Where are my blog posts stored? How easy would it be to
export them? What format can they be exported in?

It was clear that I would need to roll my own solution and for that I decided
on a JAMStack based site built in Gatsby. The stack looks like this:

- Blog Posts are written in Markdown using Frontmatter for metadata
- The blog is built using Gatsby
- The blog is hosted on Netlify.

It's a very rudimentary stack and that is very much on purpose. At the core is
the Markdown based posts. I picked Markdown as it stikes a balance between
simpicity and letting you create complex documents. The other reason is it's
been around for over a decade and doesn't seem to be going anywhere or waning in
popularity.

The site is built using Gatsby.js which is one of my all time favorite React
frameworks. The magic of Gatsby happens when you leverage it's GraphQL API.
Using GraphQL I was able to get my blog up and running in just a few lines of
code and about 5 minutes of time. Styling came in the form of TailwindCSS, for
the longest time I never understood why someone would use Tailwind until I
actually tried it and fell madly in love. I'm not a designer by any stretch of
hte imagination and TailwindCSS helps bring a level of design consistency to my
site that would otherwise just not be possible.

The last part of this stack is Netlify. I contemplated hosting the site on
Vercel however with both of these services essentially being a pretty frontend
for AWS, I didn't see much benefit in hosting it on a different platform. I
don't know if I will keep hosting the site on Netlify in the future but who
knows.

The last consideration I made when building this stack was the fact that change
is inevatable. At some point in the next 10 years I will probably rebuild this
blog in a different framework, and there is a good chance at some point I will
have to host it somewhere else or even convert the markdown files into another
format. With thtat in mind I bult each component of the stack to be as loosly
coupled to the other components as possible. Each individual piece of the stack
can be replaced and upgraded as time goes on, so far as I don't know if any of
the original pieces will remain in 10 years time.

Only time will tell I guess...
