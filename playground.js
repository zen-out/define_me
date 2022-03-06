const define_me = require('./index.js')

let getThis = define_me.containsThis(".git", define_me.git)
console.log("🚀 ~ file: playground.js ~ line 4 ~ getThis", getThis)