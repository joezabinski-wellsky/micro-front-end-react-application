## Summary
An Angular project compiled with `ngx-build-plus`. Uses Webpack's ModuleFederationPlugin to export a federated module. Note that this is not intended as an app in its own right; it is only intended to export a component which can be consumed by other frameworks.

## Status
Working. Using ModuleFederationPlugin may not be the final configuration here. CareTend Web uses `@angular-architects/module-federation`'s `withModuleFederation` function. Under the hood, `withModuleFederation` may or may not export a module in exactly the same way as ModuleFederationPlugin. Once we know what the customer needs to import, we can explore how to make that work using `withModuleFederation`.

## How to export the Angular component
 - In Terminal, navigate to `./angular-embedded`. Install with `npm install`. Export the Angular component with `npm run start`.