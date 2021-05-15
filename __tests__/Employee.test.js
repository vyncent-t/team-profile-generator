const Employee = require("../lib/Employee")

describe("Employee", () => {
    test("should create employee", () => {
        expect(new Employee()).toBeInstanceOf(Employee);
    });

    test("Can set name from constructor", () => {
        let name = "Pablo";
        let e = new Employee(name);
        expect(e.name).toBe(name);
    });

    test("Can set id for employee", () => {
        let idCode = "user01"
        let e = new Employee("name", idCode)
        expect(e.id).toBe(idCode)
    })

    test("Can set email for employee", () => {
        let email = "mail"
        let e = new Employee("name", "badge", email)
        expect(e.email).toBe(email)
    })

    test("Role defaults to employee", () => {
        let role = "employee";
        let e = new Employee();
        expect(e.role).toBe(role);
    })

    test("returns employee name", () => {
        let name = "yea"
        let e = new Employee(name)
        expect(e.getName()).toBe(name)
    })

    test("returns employee ID", () => {
        let id = "user01"
        let e = new Employee("name", id)
        expect(e.getID()).toBe(id)
    })

    test("returns employee email", () => {
        let email = "user@email.com"
        let e = new Employee("name", "id", email)
        expect(e.getEmail()).toBe(email)
    })

    test("returns employee role", () => {
        let e = new Employee()
        expect(e.getRole()).toBe("employee")
    })
});
