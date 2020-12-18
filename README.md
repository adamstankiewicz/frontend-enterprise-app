# frontend-enterprise-app
> A monorepo that follows a micro-frontend architecture using Module Federation for all things Enterprise UI.

## Getting Started

This is a monorepo that uses Lerna to manage all Enterprise-related UI applications and packages. To install Lerna:

```
npm i -g lerna
```

To get up and running with the app, run the following commands:

```
lerna bootstrap
```

This will install NPM node_modules for all packages in the monorepo and symlink packages together.

```
lerna run start --parallel
```

This will run `npm run start` for all packages and log the Webpack Dev Server console output in the terminal.

Open up http://localhost:42000 to see the Webpack 5 Module Federation architecture in action :)

...or alternatively, you may run/open each package in isolation to develop and view separate from the entire application:

```
lerna run start --scope=<package name> --stream
```
