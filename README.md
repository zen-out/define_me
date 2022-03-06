# Purpose

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/define_me)

- Defines common regexp patterns
- Keep all important definitions here 

# Instructions: 
```npm install define_me ``` 
 ``` const define_me =  require('define_me')```
## how to use 
```js
const { git, node_modules } = require("define_me")
let check = new RegExp(git)
let str = ".git"
console.log(check.test(str));


<a name="containsThis"></a>

## containsThis(string, regexp) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param  | Type             |
|--------|------------------|
| string | <code>any</code> |
| regexp | <code>any</code> |

**Example**  
```js
let getThis = define_me.containsThis(".git", define_me.git)
console.log("🚀 ~ file: playground.js ~ line 4 ~ getThis", getThis)
```