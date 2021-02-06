## My Website

[Hosted at sunnygolovine.com](https://sunnygolovine.com)

## Prerequisites

- NodeJS v10+
- Yarn (`npm install -g yarn`)

## Setup

To start run `yarn install` to install dependencies.
Then run `yarn netlify login` to login to Netlify.
Finally after loggin in run `yarn netlify --telemetry-disable`
to opt out of data gathering.

After this you can run the commands below

## Commands

```bash

yarn start # start dev server
yarn build # build the app
yarn format # runs prettier
yarn ci # runs: tsc and prettier
yarn netlify-dev # runs netlify dev server

```
