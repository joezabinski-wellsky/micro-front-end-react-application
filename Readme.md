
# React and Next.js applications with micro front end architecture

This is a demonstration project to show an Angular micro application being consumed in React and Next.js.

## Status
React is working.

Next.js is not yet working. The module can be loaded successfully, and the core Angular function making everything happen can run, but it needs to be run with precise timing that needs more research. Next.js has a lot more guardrails than React around executing code in the context of dynamically loading a component. Our goal is likely plausible; we just would need to learn more about Next.js.

## Components

### angular-embedded
An Angular application compiled with ngx-build-plus. Uses Webpack's ModuleFederationPlugin to export a federated module.

### app
A React application compiled with Craco. Uses Webpack's ModuleFederationPlugin to import `angular-embedded`'s federated module.

#### How to run the React application
 - In Terminal, navigate to `./angular-embedded`. Install with `npm install`. Run the Angular app with `npm run start`.
 - Open a second Terminal, and navigate to `./app`. Install with `npm install`. Run the React app with `npm run start`.
 - In a browser, navigate to `localhost:3000`.

### shell
A Next.js application compiled with Next. Uses `@module-federation/nextjs-mf`'s NextFederationPlugin to import `angular-embedded`'s federated module.

#### How to run the Next.js application
 - In Terminal, navigate to `./angular-embedded`. Install with `npm install`. Run the Angular app with `npm run start`.
 - Open a second Terminal, and navigate to `./shell`. Install with `npm install`. Run the Next.js app with `npm run dev`.
 - In a browser, navigate to `localhost:3000`.

### Gotchas Discovered
- Next.js's latest version standardly includes a new App Router of theirs, making Next.js apps work more like an SPA. Zach Jackson has already (gone on the record)[https://github.com/module-federation/core/pull/2002#issuecomment-2003747435] saying that Next.js App Routing and his NextFederationPlugin are not compatible, and never will be. So if anyone wants to use his plugin, they can't ever use App Router.
- There is (an open bug)[https://github.com/module-federation/core/issues/1961] for `@module-federation/nextjs-mf` which seems to make it impossible to use NextFederationPlugin for anything beyond `@module-federation/nextjs-mf` v8.3.9 and Next.js v13.4.9. As of August 2024, `@module-federation/nextjs-mf` v8.3.9 was released just last spring, but Next.js is already on v14. So this bug is an obstacle to keeping up with Next.js.
