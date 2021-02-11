---
title: Creating Dev Only Routes in NextJS
description: A simple pattern I use to create dev only routes in NextJS
date: Feb 11, 2021
slug: dev-routes-in-nextjs
---

At some point during the construction of this site, I needed a developer menu.
The site was getting more and more functionality added to it and I needed a
place that I could use as a sandbox but also where I could put stuff I only
needed during development.

Creating a page in NextJS is trivial, getting that page to _only_ appear in
development is a bit more difficult. Lets dive into it. First off you will need
to create a page you do not wish to see in production. On my site I have a `dev`
page located simply at `/dev`.

NextJS lets you redirect routes to other routes in your NextJS configuration
file. From the NextJS docs it looks like this:

```js
module.exports = {
  async redirects() {
    return [
      {
        source: "/dev",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
```

This piece of code will work in production however it won't let you access the
dev page in development mode. For that we will need to make the route
conditional, based on the `NODE_ENV` of the current environment. To do this, simply
replace `destination: "/"` with `destination: process.env.NODE_ENV === "production" ? "/" : "/dev"`. You new config should look like this now:

```js
module.exports = {
  async redirects() {
    return [
      {
        source: "/dev",
        destination: process.env.NODE_ENV === "production" ? "/" : "/dev",
        permanent: true,
      },
    ];
  },
};
```

That's it. To try it out load up your site in development mode and try
navigating to `/dev`, when in dev mode you should reach the page. However if you
run `next build && next export && next start` (which builds the site, exports
it, and then starts serving the exported copy locally) and then try navigating
to `/dev`, you should be redirected to `/`.

Try it out with this link to my dev page. You will automatically be redirected
to the home page [https://sunnygolovine.com/dev](https://sunnygolovine.com/dev).

Cheers!
