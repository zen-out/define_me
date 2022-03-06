const { node_modules, git } = require("./definitions")

/**
 * @example
 * 
let getThis = define_me.containsThis(".git", define_me.git)
console.log("🚀 ~ file: playground.js ~ line 4 ~ getThis", getThis)
 * @author zen-out
 * @date 2022-03-06
 * @param {any} string
 * @param {any}  regexp
 * @returns {any}
 */
function containsThis(string, regexp) {
    let check = new RegExp(regexp)
    return check.test(string)
}

module.exports = { containsThis }