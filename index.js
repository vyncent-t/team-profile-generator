const functions = {
    add: (numA,numB) => numA + numB
}
module.exports = functions;

const inquirer = require("inquirer");

// func to add key pairs to an object
const addProp = (obj, propName, propValue) => {
    obj[propName] = propValue
};

// objects and arr to work with
const workTeam = []; // work team will be an arr of objs dynamically created and looped for info of all other team members, engineer or intern

// classes
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `employee name:${this.name}`
    }
    getID() {
        return `employee ID for ${this.name}:${this.ID}`
    }
    getEmail() {
        return `employee email for ${this.name}:${this.email}`
    }
    getRole() {
        return `Role for ${this.name}: employee`
    }
}

class Manager extends Employee {
    constructor(name,id,email,officeNum) {
        super(name,id,email)
        this.officeNum = officeNum;
    }
    getOfficeNumber() {
        return `office number for ${this.name} is: #${this.officeNum}`
    }
    getRole() {
        return `Role for ${this.name} - manager`
    }
}

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email)
        this.github = github;
    }
    getGithub() {
        return `the github username for ${this.name} is ${this.github}`
    }
    getRole() {
        return `role for ${this.name} - engineer`
    }
}

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email)
        this.school = school;
    }
    getSchool() {
        return `the intern ${this.name} attends ${this.school}`
    }
    getRole() {
        return `role for ${this.name} - intern`
    }
}

inquirer.prompt([
    {name: "managerName",
    message: "Please enter team manager name:"},
    {name: "managerID",
    message: "Please enter team manager ID:"},
    {name: "managerEmail",
    message: "Please enter team manager email:"},
    {name: "managerOffice",
    message: "Please enter team manager office number:"},
]).then( answers => {

    let teamManager = new Manager(answers.managerName,answers.managerID,answers.managerEmail,answers.managerOffice);

    console.log(teamManager)
    workTeam.push(teamManager)
    teamBuild()
}).catch(err => {
    console.log(err)
})



function teamBuild() {
    inquirer.prompt([
    {type: "list",
    name: "employeeRole",
    message: "ADDING TEAM MEMBER: is this team member an engineer or an intern?",
    choices: ["engineer","intern","finish team"]
    }]).then(teamAnswers => {
        if (teamAnswers.employeeRole == "engineer"){
            console.log("engineer ready")
            // create new obj for workTeam array?
            addEngineer()
        } else if ( teamAnswers.employeeRole == "intern") {
            console.log("intern ready")
            addIntern()
        } else {
            console.log("boot team finisher")
            console.log(`Your current team - team manager = ${workTeam[0].name} team members = ${workTeam[1].name}`)
            // FILE CREATE THE HTML
        }
    })

}

function addEngineer() {
            inquirer.prompt([
    {name: "engineerName",
    message: "Please enter team engineer name:"},
    {name: "engineerID",
    message: "Please enter team engiener ID:"},
    {name: "engineerEmail",
    message: "Please enter team engineer email:"},
    {name: "engineerGit",
    message: "Please enter engineer github username:"},
]).then( answers => {

    let engineerMember = new Engineer(answers.engineerName,answers.engineerID,answers.engineerEmail,answers.engineerGit);

    console.log(engineerMember)
    workTeam.push(engineerMember)
    teamBuild()
}).catch(err => {
    console.log(err)
})
}

function addIntern() {
            inquirer.prompt([
    {name: "internName",
    message: "Please enter team intern name:"},
    {name: "internID",
    message: "Please enter team intern ID:"},
    {name: "internEmail",
    message: "Please enter team intern email:"},
    {name: "internSchool",
    message: "Please enter school of this intern:"},
]).then( answers => {

    let internMember = new Intern(answers.internName,answers.internID,answers.internEmail,answers.internSchool);

    console.log(internMember)
    workTeam.push(internMember)
    teamBuild()
}).catch(err => {
    console.log(err)
})
}

