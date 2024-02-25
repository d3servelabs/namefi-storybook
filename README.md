# namefi dApp Homepage
- Entry (Notion): https://www.notion.so/d3servelabs/Design-Front-End-Team-Portal-d55f028239f04c6e978ad817930c08b5
- Chromatic: https://www.chromatic.com/build?appId=65c152b8f94c60aa3e2a4564
- Storybook: https://storybook.namefi.dev

## Release a new version to NPM

First make sure you are authenticated to NPM

```sh
npm run bump # bump a patch version and push to git
npm run build:lib
npm login
npm run publish
```

In client side do

```sh
npx npm-upgrade @namefi/ui
```

## Reference
- TODO: Use tailwind prettier plugin: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
