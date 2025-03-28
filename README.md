<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/keepersobe/notes-client">
    <svg viewBox="0 0 128 128" width="80" height="80">
      <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path>
      <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"></path>
    </svg>
  </a>

<h3 align="center">Developer Splash</h3>

  <p align="center">
    A super simple Vue website.
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#development">Development</a></li>
        <li><a href="#run-tests">Run tests</a></li>
      </ul>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

- [![Vue][Vue.js]][Vue-url]
- [![TypeScript][TypeScript.js]][TypeScript-url]
- [![Vite][Vite]][Vite-url]
- [![Vitest][Vitest]][Vitest-url]
- [![Playwright][Playwright]][Playwright-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.

To get a local copy up and running follow these simple example steps.

<!-- PREREQUISITES -->

### Prerequisites

- Install NodeJs

```sh
npm install npm@latest -g
```

<!-- INSTALLATION -->

### Installation

- Clone the repository

```sh
$ git clone https://github.com/keepersobe/developer-splash.git
```

- Install NPM packages

```sh
$ npm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

### Development

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

#### Format

```sh
npm run format
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Run tests

#### Run Unit Tests with [Vitest](Vitest-url)

```sh
npm run test:unit
```

#### Run End-to-End Tests with [Playwright](Playwright-url)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[Vue.js]: https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[TypeScript.js]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Vitest]: https://img.shields.io/badge/Vitest-%236E9F18?style=for-the-badge&logo=Vitest&logoColor=%23fcd703
[Vitest-url]: https://vitest.dev/
[Vite]: https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vite.dev/
[Playwright]: https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white
[Playwright-url]: https://playwright.dev/
