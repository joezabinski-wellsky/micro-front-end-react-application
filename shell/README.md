## Summary
A Next.js application compiled with Next. Uses `@module-federation/nextjs-mf`'s NextFederationPlugin to import `angular-embedded`'s federated module.

## Status
This Next.js application is not yet working. The Angular module can be loaded successfully, and the core Angular function making everything happen can run, but it needs to be run with precise timing that needs more research. Next.js has a lot more guardrails than React around executing code in the context of dynamically loading a component. Our goal is likely plausible; we just would need to learn more about Next.js.

#### How to run the Next.js application
 - In Terminal, navigate to `./angular-embedded`. Install with `npm install`. Run the Angular app with `npm run start`.
 - Open a second Terminal, and navigate to `./shell`. Install with `npm install`. Run the Next.js app with `npm run dev`.
 - In a browser, navigate to `localhost:3000`.

## Gotchas Discovered
- Next.js's latest version standardly includes a new App Router of theirs, making Next.js apps work more like an SPA. Zach Jackson (the author of `@module-federation/nextjs-mf`) has already (gone on the record)[https://github.com/module-federation/core/pull/2002#issuecomment-2003747435] saying that Next.js App Routing and his NextFederationPlugin are not compatible, and never will be. So if anyone wants to use his plugin, they can't ever use App Router.
- There is (an open bug)[https://github.com/module-federation/core/issues/1961] for `@module-federation/nextjs-mf` which seems to make it impossible to use NextFederationPlugin for anything beyond `@module-federation/nextjs-mf` v8.3.9 and Next.js v13.4.9. As of August 2024, `@module-federation/nextjs-mf` v8.3.9 was released just last spring, but Next.js is already on v14. So this bug is an obstacle to keeping up with Next.js.

## Next Steps
We need more information from the customer on the configuration of their Next.js app. The use of `@module-federation/nextjs-mf` is a good guess, but only a guess. The exact nature of their plugin and its configuration is important before we make further decisions on how the Angular configuration needs to be further developed, and how the Angular module could be consumed in Next.js.
