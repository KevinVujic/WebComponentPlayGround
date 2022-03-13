# WebComponentPlayGround
My Playground repository to get familiar with web components. A simple Todo list app to start easy. I might integrate a more sophisticated app in the future which might use a hybrid approach, e.g. a JS Framework which uses Web Components.

## Setup
Install the dependencies
```bash
    npm i
```

## Build
This project uses TypeScript. To compile it to a JavaScript version you have to build the project:
```bash
    npm run build
```
You can also watch files and automaticly rebuild on source code changes. Run the following command in a separate shell:
```bash
    npm run build:watch
```

## Testing
This project uses modern-web.dev's [@web/test-runner](https://www.npmjs.com/package/@web/test-runner) along with Mocha, Chai, and some related helpers for testing. See the [modern-web.dev testing documentation](https://modern-web.dev/docs/test-runner/overview/) for more information. Testcases will be added in the upcoming days so stay tuned.

Tests can be run with the test script, which will run your tests against Lit's development mode (with more verbose errors) as well as against Lit's production mode:
```bash
    npm test
```
Also the watch command for automatic testing on source code changes:
```bash
    npm test:watch
```
You can run the development and production tests accordingly if you want a more concrete command:
```bash
    npm test:prod
    npm test:dev
    npm test:prod:watch
    npm test:dev:watch
```

## Serving the project locally
This project uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. For more information, visit [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/).

To run the dev server and open the project in a new browser tab:
```bash
    npm run serve
```
This will serve your code using Lit's development mode with more verbose errors. To use the production mode, use the following command instead:
```bash
    npm run serve:prod
```

## Editing
If you use VS Code using the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) is highly recommended. It adds syntax highlighting, type-checking, code completion, Linting etc.

## Linting
Linting of TypeScript files is provided by ESLint and TypeScript ESLint. In addition, lit-analyzer is used to type-check and lint lit-html templates with the same engine and rules as the lit-plugin described in the editing section.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing .eslintrc.json and tsconfig.json.

To lint the project run:
```bash
    npm run lint
```

## Formatting
[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in .prettierrc.json.

## Static Site
This project includes a simple website generated with the eleventy static site generator and the templates and pages in /docs-src. The site is generated to /docs and intended to be checked in so that GitHub pages can serve the site from /docs on the master branch.

To enable the site go to the GitHub settings and change the GitHub Pages "Source" setting to "master branch /docs folder". Site generation will be looked into in the future and is currently planned. Stay tuned for changes

To build the site, run:
```bash
    npm run docs
```

To Serve the site locally, run:
´´´bash
    npm run docs:serve
´´´

To automaticly serve the site new on changes:
```bash
    npm run docs:watch
```
The site will be served at http://localhost:8000

## Bundling and minification
This starter template used for my project doesn't include any build-time optimizations like bundling or minification. It is recommended publishing components as unoptimized JavaScript modules, and performing build-time optimizations at the application level. This gives build tools the best chance to deduplicate code, remove dead code, and so on. The todo list app will get build minifiaction in the future, so stay tuned.

For information on building application projects that include LitElement components, see [Build for production](https://lit.dev/docs/tools/production/) on the Lit site.


## More information
See [Get started](https://lit.dev/docs/getting-started/) on the Lit Site for more information.
