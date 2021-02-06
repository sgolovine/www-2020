## My Website

[Hosted at sunnygolovine.com](https://sunnygolovine.com)

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

Copy `.env.example` to `.env` then replace the value for `SENDGRID_API_KEY` with your own

## Commands

```bash

yarn start # start dev server
yarn build # build the app
yarn format # runs prettier
yarn ci # runs: tsc and prettier
yarn netlify-dev # runs netlify dev server

```
