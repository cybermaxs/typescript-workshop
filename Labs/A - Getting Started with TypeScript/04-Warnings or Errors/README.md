04 - Warnings or Errors
===

To make it easy for you to migrate your JavaScript code to TypeScript, even if there are compilation errors, by default TypeScript will emit valid JavaScript the best that it can. 
So you can incrementally upgrade your JavaScript code to TypeScript. This is very different from how many other language compilers work and yet another reason to move to TypeScript.

Instructions
---
- Review `app.ts` ; Can you see any warning/errors in your favorite editor ?
- Compile the file using the ts compiler `tsc --noEmitOnError app.ts` ; Can you see a new file ?
- Compile the file again with the flag `tsc app.ts`; Can you see a new file ?
- Run the file `node app.js` ; Even with types errors, the js file is still valid and can run without errors.

More Resource ?
---
- [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)