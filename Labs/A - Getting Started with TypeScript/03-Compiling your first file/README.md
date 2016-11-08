03 - Compiling your first file
===

The default extension for typescript files is ts. To compile a ts file, you just need to run `tsc anyfile.ts`. 
This command will generate a new file `anyfile.js` and it is JavaScript ! 

Instructions
---
- Review `app.js`. Any difference with javascript ?
- Run the TypeScript compiler on this file `tsc app.ts`.
- A new file `app.js` should be present in this directory ; Is it similar to the first one ?
- (Optional) Run the file `node app.js`

**Congrats** you've compiled your first file !
The compiler has also a watch flag `-w` : it watches input files and trigger recompilation on changes.

Need Help ?
---
- [Official Tutorial](https://www.typescriptlang.org/docs/tutorial.html)