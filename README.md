# Purpose

- Defines common regexp patterns

## how to use 
```js
const { git, node_modules } = require("define_me")
let check = new RegExp(git)
let str = ".git"
console.log(check.test(str));
```