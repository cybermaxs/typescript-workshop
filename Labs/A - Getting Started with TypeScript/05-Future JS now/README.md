05 - Future JavaScript Now
===

TypeScript allows you to use a bunch of features from ES6 and beyond in current (ES3 and ES5 level) JavaScript engines (like current browsers and NodeJS). 
You don't have to worry about what is supported or not, the Typescript compiler has polyfills for all of its features. 
A polyfill is a fallback using an older version of the language. You don't have to worry about the version of JavaScript engine, the feature will always be available. 
The compiler has a short release cycle, so new features are always availaible as son as they're specified/proposed. 

Instructions
---
- Review `app.ts` ; Can you see an ES 6 feature ?
- Run the TypeScript compiler on this file `tsc --target es6 app.ts`. Do you see a change ?
- Compile the file again by targeting ES5 `tsc --target es5 app.ts`; Is it the same js ? Class is not supported in ES5.

More Resources ?
---
- [Compiler Options](https://www.typescriptlang.org/docs/tutorial.html#toc-project-config)