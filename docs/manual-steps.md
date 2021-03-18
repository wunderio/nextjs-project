Manual steps to recreate this repo:
Based partially on https://nextjs.org/docs/getting-started#manual-setup
- Run `npx create-next-app`, only to get the default `.gitignore`  (also can be found here https://github.com/vercel/next.js/tree/canary/packages/create-next-app/templates/default)
- But otherwise, better the manual installation: 
- Run npm init without questions:
  `npm init -y`
- Install packages. This will generate also a `package-lock.json`, needed to run `npm ci` in circleCI:
  `npm install next react react-dom`
- Open package.json and add the following scripts:

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

- Add folder and file `/pages/index.js` with content:

```
function HomePage() {
  return <div>Welcome to Next.js!</div>;
}
export default HomePage;
```

- This is enough for `npm run dev` to work.
- Add typescript:
  `touch tsconfig.json`
- Run `npm run dev`, it will warn you to install this, that I did:
  `npm install --save-dev typescript @types/react @types/node`
- Run `npm run dev` again, and will say "We detected TypeScript in your project and created a tsconfig.json file for you". Also will create the file `next-env.d.ts`


