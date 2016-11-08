05 - Compilation context
===

The	compilation	context	contains files that needs to be transpiled to javascript and information about which compiler options (like the flag `--noEmitOnError`)
You can also change the default behavior of the compiler for some errors (like allow implicit any...?!?)
All those settings are located in a file named `tsconfig.json`, generally placed in the root folder of your project (So there is generally only one tsconfig.json per project)

Instructions
---
- Review app.ts ; Can you see comments ?
- Create a new tsconfig.json file `tsc --init -module commonjs`
- Set flag `removeAnyCommments` to true
- Include app.ts and anotherapp.ts into the compiler context
- Run the typescript compiler `tsc`
- 2 js file should be generated. Comments should be removed.

More Resources ?
---
- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Compiler Options](https://www.typescriptlang.org/docs/tutorial.html#toc-project-config)