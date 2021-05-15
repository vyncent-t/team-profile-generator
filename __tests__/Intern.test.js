const Intern = require("../lib/Intern")

describe("Intern", () => {
    test("intern school func", () => {
        let school = "place"
        let i = new Intern("name", "badge", "email", school)
        expect(i.getSchool()).toBe(school)
    });

    test("intern school constructor", () => {
        let school = "place"
        let i = new Intern("name", "badge", "email", school)
        expect(i.school).toBe(school)
    });

    test("intern role", () => {
        let i = new Intern();
        expect(i.getRole()).toBe("intern")
    })
})