# Namefi dApp Homepage
- Entry (Notion): https://www.notion.so/d3servelabs/Design-Front-End-Team-Portal-d55f028239f04c6e978ad817930c08b5
- Chromatic: https://www.chromatic.com/build?appId=65c152b8f94c60aa3e2a4564
- Storybook: https://storybook.namefi.dev

## Reference
- TODO: Use tailwind prettier plugin: https://github.com/tailwindlabs/prettier-plugin-tailwindcss

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