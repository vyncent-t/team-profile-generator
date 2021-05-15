const Manager = require("../lib/Manager")

describe("Manager", () => {
    test("returns manager office number", () => {
        let extention = "example"
        let m = new Manager("name", "id", "email", extention)
        expect(m.getOfficeNumber()).toBe(extention)
    });

    test("Office number constructor", () => {
        let extention = "example"
        let m = new Manager("name", "id", "email", extention)
        expect(m.officeNum).toBe(extention)
    });

    test("role should be manager", () => {
        let m = new Manager()
        expect(m.getRole()).toBe("manager")
    })
})