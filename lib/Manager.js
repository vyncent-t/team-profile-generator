const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
        this.role = "manager"
    }
    getOfficeNumber() {
        return this.officeNum
    }
    getRole() {
        return this.role
    }
}

module.exports = Manager