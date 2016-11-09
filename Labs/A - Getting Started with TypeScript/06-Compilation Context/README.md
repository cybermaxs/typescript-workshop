06 - Compilation context
===

The	compilation	context	contains files that needs to be transpiled to javascript and compiler options (like path, target version, generate source maps...)
You can also change the default behavior of the compiler for some errors in order to be less/more strict (eg to forbid implicit type inference).
All those settings are located in a file named `tsconfig.json`, generally placed in the root folder of your project (So there is generally only one tsconfig.json per project).
By default, the compiler will process all files in working folder + subdirectories, but you can include/exclude files in `tsconfig.json`.

Instructions
---
- Review app.ts ; Can you see comments ?
- Create a new `tsconfig.json` file `tsc --init`
- Set flag `removeComments` to true 
- Include `app.ts` and exclude `anotherapp.ts` into the compiler context.
- Run the typescript compiler `tsc`
- Only one js file should be generated. Comments should be removed.

More Resources ?
---
- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Compiler Options](https://www.typescriptlang.org/docs/tutorial.html#toc-project-config)