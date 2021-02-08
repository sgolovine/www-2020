## My Website

[Hosted at sunnygolovine.com](https://sunnygolovine.com)

![Test CI](https://github.com/sgolovine/sunnygolovine.com/workflows/Test%20CI/badge.svg)

## Prerequisites

- NodeJS v10+
- Yarn (`npm install -g yarn`)

## Setup

1. Install Dependencies

```bash

yarn install

```

2. Login to Netlify

```bash
yarn netlify login # login to netlify
yarn netlify --telemetry-disable # disable telemetry

```

3. Setup ENV

Create a file named `.env` and copy the values from `.env.exmple`. Replace values with your own.

## Commands

```bash

yarn start # start dev server
yarn build # build the app. Runs 'next build' and 'next export'
yarn build:dry # runs 'next build' without 'next export'
yarn format # runs prettier
yarn ci # runs: tsc and prettier
yarn netlify-dev # runs netlify dev server
yarn clean # clean local cache

```

### Blog Workflow Commands

```bash

yarn post:create <post_name> #create a new post
yarn post:delete <post_name> # delete a post

```
