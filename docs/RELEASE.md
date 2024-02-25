## Release a new version to NPM

First make sure you are authenticated to NPM
```shell
#ensure you're logged in with the correct account
npm login
```

```sh
npm run bump # bump a patch version and push to git
npm run build:lib
npm publish
```

In client side do

```sh
npm upgrade @namefi/ui
#or
yarn upgrade @namefi/ui
```

