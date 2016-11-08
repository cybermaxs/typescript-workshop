TypeScript Language Features
====
This module covers main language features in a koan-style.

Getting Started
---
- run the compiler in watch mode `tsc -w`
- run the test runner in watch mode `npm run test:watch`
- start to fix the first test, then the second... until the end

Tips
---
You certainly don't know all the feature, maybe you're even working with TS for the first time. 
That's not a problem. In case you have a problem, here are some tips :
- Read Comments/TODO/Tips
- review the transcompiled js : it may help you to understand the problem
- use/abuse your editor intellisense/autocompletion : embrace a type system !
- always check typescript compiler errors/warning : you should not have errors in your tests.
- do not hesitate to browse online resources : the best way to learn
- NEVER change assertions/expectations : you job is to fix tests, not to write new ones. 
- you can skip test (not recommanded). Just replace it('...) by it.skip('...) : this test will be marked as pending

Useful resources
----
- **Recomanded** Typescript handbook [https://basarat.gitbooks.io/typescript/content/docs/getting-started.html]
- **Recomanded** Typescript Book (https://www.typescriptlang.org/docs/handbook/basic-types.html)
- _Optional_ Mocha : the test runner used in this workshop. 
- _Optional_ Chai : tha assert library used in the workshop. 