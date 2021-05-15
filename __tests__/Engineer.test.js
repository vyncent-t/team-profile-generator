const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    test("returns engineer github", () => {
        let git = "username"
        let e = new Engineer("name", "badge", "email", git)
        expect(e.getGithub()).toBe(git)
    })

    test("constructor for github", () => {
        let git = "username"
        let e = new Engineer("name", "badge", "email", git)
        expect(e.github).toBe(git)
    })

    test("engineer role", () => {
        let e = new Engineer()
        expect(e.getRole()).toBe("engineer")
    })
})