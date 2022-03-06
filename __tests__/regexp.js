const t = require("node_basetest")
const define_me = require("../index")
describe("should hit regexp", () => {
    it("should remove .git", () => {

        let getThis = define_me.containsThis(".git", define_me.git)
        t.T(getThis)
    })
})