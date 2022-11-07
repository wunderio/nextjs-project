# Wunder Next.js template

Next.js starter kit for Wunder projects.

## Features

- [x] Ready to be deployed to [Silta](https://github.com/wunderio/silta)
- [x] TypeScript setup
- [x] Prettier, ESLint
- [ ] husky and lint-staged
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
7. After confirming the starter template is working as expected, developers are encouraged to update dependencies and keep them as up to date as possible throughout the lifetime of the project.

For additional instructions, please see the [Silta documentation](https://github.com/wunderio/silta).

## System requirements

- System requirements are the same as the [Next.js requirements](https://nextjs.org/docs#system-requirements) for the version you are using.

## Local development

1. Install the NPM packages:  
   `npm i`
2. Run the NextJS app in development mode:  
   `npm run dev`

## Linting

Run "npm run lint" and it will show if there are any errors.

## Linting for Windows users

1. Make sure you have LF selected as line ending in your editor.
2. If point 1 is not enough, try this command "git config --global core.autocrlf false".More info here https://stackoverflow.com/questions/25724969/sourcetree-line-ending-issue

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
