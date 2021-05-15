
const fs = require("fs")
const inquirer = require("inquirer");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern");
const { promisify } = require("util");

// objects and arr to work with
const workTeam = []; // work team will be an arr of objs dynamically created and looped for info of all other team members, engineer or intern

inquirer.prompt([
    {
        name: "managerName",
        message: "Please enter team manager name:"
    },
    {
        name: "managerID",
        message: "Please enter team manager ID:"
    },
    {
        name: "managerEmail",
        message: "Please enter team manager email:"
    },
    {
        name: "managerOffice",
        message: "Please enter team manager office number:"
    },
]).then(answers => {

    let teamManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);

    // console.log(teamManager)
    // console.log(teamManager.getRole())
    workTeam.push(teamManager)
    teamBuild()
}).catch(err => {
    console.log(err)
})



function teamBuild() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeRole",
            message: "ADDING TEAM MEMBER: is this team member an engineer or an intern?",
            choices: ["engineer", "intern", "finish team"]
        }]).then(teamAnswers => {
            if (teamAnswers.employeeRole == "engineer") {
                console.log("engineer ready")
                // create new obj for workTeam array?
                addEngineer()
            } else if (teamAnswers.employeeRole == "intern") {
                console.log("intern ready")
                addIntern()
            } else {
                let basePage = teamFinalizer()
                console.log("boot team finisher")
                // FILE CREATE THE HTML
                fs.writeFile("index.html", basePage, (err) => {
                    if (err) throw err;
                    console.log('The file has been saved!');
                });
            }
        })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "engineerName",
            message: "Please enter team engineer name:"
        },
        {
            name: "engineerID",
            message: "Please enter team engiener ID:"
        },
        {
            name: "engineerEmail",
            message: "Please enter team engineer email:"
        },
        {
            name: "engineerGit",
            message: "Please enter engineer github username:"
        },
    ]).then(answers => {

        let engineerMember = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGit);

        // console.log(engineerMember)
        // console.log(engineerMember.getRole())
        workTeam.push(engineerMember)
        teamBuild()
    }).catch(err => {
        console.log(err)
    })
}

function addIntern() {
    inquirer.prompt([
        {
            name: "internName",
            message: "Please enter team intern name:"
        },
        {
            name: "internID",
            message: "Please enter team intern ID:"
        },
        {
            name: "internEmail",
            message: "Please enter team intern email:"
        },
        {
            name: "internSchool",
            message: "Please enter school of this intern:"
        },
    ]).then(answers => {

        let internMember = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);

        // console.log(internMember)
        // console.log(internMember.getRole())
        workTeam.push(internMember)
        teamBuild()
    }).catch(err => {
        console.log(err)
    })
}

function teamFinalizer() {
    // for every employee after the leader so workteam[1] export their name ID and email - along with the if else the role is engineer edit the card like 4 to be github if role is intern edit the card line 4 to be school

    for (let i = 0; i < workTeam.length; i++) {
        if (workTeam[i].role === "manager") {
            // update the string prop
            workTeam[i].pagetext = `
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-light">
            <div> <p>${workTeam[i].getName()}</p> </div>
            <div> <p>${workTeam[i].getRole()}</p> </div>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${workTeam[i].getID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${workTeam[i].getEmail()}">${workTeam[i].getEmail()}</a></li>
                <li class="list-group-item">Office number: ${workTeam[i].getOfficeNumber()}</li>
            </ul>
        </div>`
            console.log(`updated page text for: ${workTeam[i].getName()}`)
        } else if (workTeam[i].role === "engineer") {
            workTeam[i].pagetext = `
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-light"> 
            <div> <p>${workTeam[i].getName()}</p> </div>
            <div> <p>${workTeam[i].getRole()}</p> </div>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${workTeam[i].getID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${workTeam[i].getEmail()}">${workTeam[i].getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${workTeam[i].getGithub()}" target="_blank">${workTeam[i].getGithub()}</a></li>
            </ul>
        </div>`
            console.log(`updated page text for: ${workTeam[i].getName()}`)
        } else if (workTeam[i].role === "intern") {
            workTeam[i].pagetext = `
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary text-light"> 
            <div> <p>${workTeam[i].getName()}</p> </div>
            <div> <p>${workTeam[i].getRole()}</p> </div>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${workTeam[i].getID()}</li>
                <li class="list-group-item">Email: <a href="mailto:${workTeam[i].getEmail()}">${workTeam[i].getEmail()}</a></li>
                <li class="list-group-item">School: ${workTeam[i].getSchool()}</li>
            </ul>
        </div>`
            console.log(`updated page text for: ${workTeam[i].getName()}`)
        }
    }

    let teamPageContent = workTeam.map(text => text.pagetext)

    let finalPageContent = teamPageContent.join(" ")

    console.log(teamPageContent)

    let basePage = `
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <title>Team builder</title>
  </head>
  <body class="container-fluid">
      <div class=" min-hieghtd-block w-100 h-50 bg-primary">
          <h1 class="text-center text-light">Team builder</h1>
      </div>
    <div>
        <div class="d-flex justify-content-around"> ${finalPageContent} </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  </body>
</html>
        `;

    return basePage;
}