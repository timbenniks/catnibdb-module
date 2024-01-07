# CatnibDB 😼

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

CatnibDB Nuxt module to interface with CatnibDB back-end.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/timbenniks/catnibdb?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- 🐱 &nbsp;`useCat()`
- 🙀 &nbsp;`useCats()`
- 😸 &nbsp;`usePage()`
- 😺 &nbsp;`usePages()`
- 😽 &nbsp;`<CatnibdbPage slug="home" />`

## Quick Setup

1. Add `catnibdb` dependency to your project

```bash
# Using pnpm
pnpm add -D catnibdb

# Using yarn
yarn add --dev catnibdb

# Using npm
npm install --save-dev catnibdb
```

2. Add `catnibdb` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["catnibdb"],
});
```

3. Add `key` and `url` in your `.env` file like this:

```env
CATNIBDB_URL=""
CATNIBDB_KEY=""
```

or alternativly add them to Nuxt config like this:

```js
export default defineNuxtConfig({
  modules: ["catnibdb"],

  catnibdb: {
    url: "",
    key: "",
  },
});
```

That's it! You can now use CatnibDB in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/catnibdb/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/catnibdb
[npm-downloads-src]: https://img.shields.io/npm/dm/catnibdb.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/catnibdb
[license-src]: https://img.shields.io/npm/l/catnibdb.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/catnibdb
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
