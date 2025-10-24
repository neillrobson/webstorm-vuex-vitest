# Webstorm Vuex Vitest

> Demonstrating a static analysis issue in Webstorm's Vue integration.

## Description

When a Vuex store is created both in the main production code and in test files, Webstorm's static analysis sometimes considers the _test store_ as the definition for type hinting and code navigation.

This repository is a minimal reproducible example of that behavior.

## Reproduction Steps

This repository can be reconstructed with the following terminal commands:

```sh
npx create vue@latest    # create-vue 3.18.2
```

Name the project `webstorm-vuex-vitest`. Select only Vitest for features to add. Skip all example code.

```sh
cd webstorm-vuex-vitest
npm i -P vuex               # vuex 4.1.0
```

Open the project in Webstorm (2025.2.4). Ensure Vue integration is turned on (Preferences -> Languages & Frameworks -> TypeScript -> Vue).

Write code similar to what is found in this repository, creating a Vuex store in both the production code and Vitest.

Note that the project builds and runs successfully, and that the unit tests pass. However, **jump-to-definition prioritizes the unit test store.**

## Project Setup

Standard boilerplate commands from `create-vue`.

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
