# Wunder Next.js template

Next.js starter kit for Wunder projects.

## Features

- [ ] Ready to be deployed to [Silta](https://github.com/wunderio/silta)
- [ ] TypeScript setup
- [ ] Prettier, ESLint, husky and lint-staged
- [ ] Env files
## Getting started

1. Click [Use this template](https://github.com/wunderio/nextjs-project/generate) to generate a new project.
2. Select correct owner
3. Name the project as client-COUNTRYCODE-CLIENT-PROJECT
4. Make the repository private (unless the project is public)
5. git clone the project in your machine and modify project details:
   - silta/silta.yml
     - See [values](https://github.com/wunderio/charts/blob/master/drupal/values.yaml) to override.
   - package.json
6. Log in to CircleCI using your Github account and add the new project using existing config.

For additional instructions, please see the [Silta documentation](https://github.com/wunderio/silta).

## System requirements

- Node.js 10.13 or later, like [Next.js](https://nextjs.org/docs#system-requirements)

## Local development

1. Install the NPM packages:  
   `npm i`
2. Run the NextJS app in development mode:  
   `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.