# Namefi dApp Homepage
- Entry (Notion): https://www.notion.so/d3servelabs/Design-Front-End-Team-Portal-d55f028239f04c6e978ad817930c08b5
- Chromatic: https://www.chromatic.com/build?appId=65c152b8f94c60aa3e2a4564
- Storybook: https://storybook.namefi.dev

## Reference
- TODO: Use tailwind prettier plugin: https://github.com/tailwindlabs/prettier-plugin-tailwindcss

## Repo
- We are using `turborepo` to manage the monorepo.
- The ui library is found in `packages/ui` and the storybook is found in `apps/storybook`
- In pnpm workspaces you can run commands for a specific package or app by using `--filter` option or by `cd`ing into the package directory and running hte command
- Some commands are run from the project dir and turbo will run them for all the packages either on parallel or in the correct order depending on the dependency between the packages
  - Like `pnpm clean:workspaces` which is used to purge the node_modules and tmp build files.
- `apps/storybook` depends on `packages/ui`, so once you develop the package run the build command then you go to `apps/storybook` to create the stories for it.
  - this is done automatically if you run `pnpm dev` from the main project dir, turbo will build the library and then run the storybook.
- To Test the changes to components while working on them in `packages/ui`, you can run `pnpm --filter=ui dev` anduse `packages/ui/src/dev/App.tsx` to test your component.

### Important conventions
- Due to some differences between how provided plugins from Vite and rollup handle modules and imports, We had to implement our own plugins to allow existing code from rollup to work with Vite.
- However we'd like to completely remove these plugins, so there are some conventions that we need to follow when it comes to asset imports:
  - When Importing an Image if you want the raw contents (this is usually needed for svg in css), you have to import the default from the image like this  
```ts
    import RawSvg from ".../image.svg?raw"
```
  - When you want to import the image as a Base64 URI to use directly in the `<img src={placeholder}/>` then you have to import the default export from the image directly
```ts
    import ImageUri from ".../image" 
```
  - When you want to import and Svg image as a react component then you have to import the default export from the image directly from `image-dir?react` 
```ts
    import ImageElement from ".../image?react" 
```
  - Currently, in the App Svg Icons are imported using named export (this is deprecated)
```ts
    import { default as ImageUri, ReactComponent as ImageElement } from ".../image" 
```

## Structure

- In this Repo We'll attempt to follow a structure similar to Atomic Design
### Atomic Design (quick explanation)
- If you're familiar with Atomic Design; [Skip the short explanation](#our-approach): 
  - `Atoms`: 
    - Small Components that are the base of the design, Usually they have a single input. A good example; Button, Chip, Tag, Label, Input, Icon, Surface, Typography...
  - `Molecules`: 
    - A Combination of `Atoms`; Such as FormField, Tooltip, Card...
    - FormField is a combination of Input and Labels
    - Tooltip is a combination of Surface, Labels, Typography, Icon
    - Card is a combination of Surface, Labels, Typography, Icon, Button, Image.
  - `Organisms`:
    - A Group of `Molecules`, `Organisms` are the UI elements that shape both the appearance and functionality of a website. They’re also the elements that start to impact user interface. The way a developer arranges molecules informs the site experience and the complexity of the finished product.
    - Examples:
      - Navigation.
      - Drawers
      - Headers
      - Forms
  - `Templates`:
    - Templates are `Organisms` strung together at the page-level or beyond. They Represent the Wireframe.
    - The best example of templates are the layouts and their final parts.
  - `Pages`:
    - They are ***Specific Instances*** of the `Templates`
- if you'd like to read more about it, Here's a [summary](https://bradfrost.com/blog/post/atomic-web-design/#molecules) by the Author of Atomic Design.

### Our Approach
- Since this Repo is considered with Pure UI, there will be real `Page` implementations in this repo; except for the purpose of the demonstration `Templates` (ie; `Pages` will only be in the story).
- For simplicity; `Atoms`, `Molecules`, and `Organisms` Will be Referred to as `Core`
  - Reasons:
    - Sometimes it can be difficult for devs to differentiate between first 3-levels
    - Some Atoms have very specific uses inside specific `Molecules`, so it doesn't add much benefit to separate them into `Atoms` Since they won't be reused elsewhere.
- `Composition` works well with the Atomic Design and the definition of `Templates`
  - The Client needs full grain control of the UI, Since this is a UI library with no business logic in the components, and the designer doesn't have full knowledge of the details of the implementation.
  - If we don't use `Composition`, we will end up with [Apropcalypse](https://fbohorqu.medium.com/a-react-pattern-to-avoid-apropcalypse-b1d58a4639d2), and also we'll have to go back and redeploy the UI library over every little change.
  - This UI will be reused in different client Repos, having concrete design in the component will hinder this, if one the clients for example needs to use the UI except for a specific functionality  
- So, Our System Will be divided into two main parts `Core` Components and `Templates`.


### Notes
- Check if the icon is first available in `@radix-ui/react-icons`, before adding assets
  - SVG Assets should be added as JSX components with `Ract.memo` and the passing `React.ComponentProps<'svg'>`, check existing icons in `components/core/icons`
- Images should be imported, ***DO NOT USE STATIC PATHS***
```typescript jsx
import exampleImage from 'assets/example.png'; // Importing the image
...
...
<img src={exampleImage} />;
```

### Release
- Releasing a new version requires the following steps (given that you're already logged in NPM and have permissions):
  - Clean the git working Dir.
  - Bump version (default is patch) ``` VERSION_LEVEL=<level> npm run bump```
  - Building the lib ``` npm run build:lib```
  - publishing the lib ``` npm publish ```
- These are combined in one command ``` VERSION_LEVEL=<level> npm run release```