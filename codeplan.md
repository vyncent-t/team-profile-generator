CODE MAP


`NEED TO USE INQUIRE`
`NEED TO USE JEST`
`NEED TO USE CLASS`
`use base class for member, extend class to manager`

    make a team array, make an object per member
    const team = [
        {placement: place[i], name:me, role:leader},
        {placement: place[i], name:you, role:member}
        ]

questions:

    TEAM MANAGER QUESTIONS
            "Please enter team manager name:"
            "Please enter team manager ID:"
            "Please enter team manager email:"
            "Please enter team manager office number:"

    ENGINEER QUESTIONS
            "Please enter team member name:"
            "Please enter team member ID:"
            "Please enter team member email:"
            "Please enter team member GitHub:"

    INTERN QUESTIONS
            "Please enter team member name:"
            "Please enter team member ID:"
            "Please enter team member email:"
            "Please enter team member school:"



class Member {
    constructor(name,ID,email) {
        this.name = name;
        this.ID = ID;
        this.email = email;
    }
}

// Not sure if this will work?? where do I need arg for office number???
class Manager extends Member {
    constructor(name,ID,email) {
        super(name,ID,email,officeNumber){
            this.officeNumber = officeNumber;
        }
    }
}

    FIRST ASK FOR TEAM MEMBER COUNT THEN CONT TO TEAM MANAGER QUESTIONS (need to save number to use with a loop length for later info imports)
        // JUST LOOP OVER THE TEAM ARRAY FOR HOW MANY PEOPLE END UP IN IT

`GIVEN a command-line application that accepts user input`
use inquire input object with questions from a questions bank

`WHEN I start the application`
`THEN I am prompted for my team members and their information`

        ** TEAM MANAGER INFO IS FIRST **
        -user starts the app and prompts for team manager’s name, employee ID, email address, and office number
            "Please enter team manager name:"
            "Please enter team manager ID:"
            "Please enter team manager email:"
            "Please enter team manager office number:"

    -- WHEN TEAM MANAGER INFO DONE, CONTINEUS TO TEAM MEMBERS

    -- TEAM MANAGER INFO IS DONE AND OBJECT IS ADDED TO TEAM ARRAY

    -- CONTINUGING ON TO TEAM MEMBER SECTION (WITH OPTIONS TO ADD TEAM ROLE)
    // WHEN THE LAST QUESTION IS ANSWERED?? START MENU LIST SEQUENCE - if else function to start the next section when team lead is done

                *MENU LIST*
    **ROLE** section choice for engineer or intern 
    (NEED TO SAVE ANSWER FOR IF ELSE FUNCTION THAT WILL TAKE USER DOWN NEXT ROUTE)

        "choose a role for your next team member"
            > engineer
            > intern
            > FINISH TEAM

    ** WHEN CHOOSING ENGINEER ** // if else function - if choice is engineer then proceed to engineer route - WHEN LAST QUESTIONS ANSWER EXISTS, ENGAGE FUNCTION THAT TAKES YOU BACK TO ROLE MENU
    prompted to enter the engineer’s name, ID, email, and GitHub username, and taken back to the menu

            "Please enter team member name:"
            "Please enter team member ID:"
            "Please enter team member email:"
            "Please enter team member GitHub:"
            -- USER IS TAKEN BACK TO MENU LIST

    ** WHEN CHOOSING INTERN ** // if else function - if choice is intern then proceed to intern route - WHEN LAST QUESTIONS ANSWER EXISTS, ENGAGE FUNCTION THAT TAKES YOU BACK TO ROLE MENU
    prompted to enter the engineer’s name, ID, email, and GitHub username, and taken back to the menu

            "Please enter team member name:"
            "Please enter team member ID:"
            "Please enter team member email:"
            "Please enter team member school:"
            -- USER IS TAKEN BACK TO MENU LIST

    ** WHEN CHOOSING FINISH TEAM ** // if else function - IF CHOSEN EXPORTS ALL UPDATED SAVED INFO FROM THE TEAM ARRAY TO THE MAIN PAGE

    -- QUITS THE APP?
    -- THE HTML FILE IS CREATED





`THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number`
`WHEN I enter the team manager’s name, employee ID, email address, and office number`
    // did this part

`THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team`
    **ROLE** section choice for engineer or intern OR option to continue


`WHEN I select the engineer option`
`THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu`
    if engineer is chosen, branch off into a different bank of questions 

`WHEN I select the intern option`
`THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu`
    if intern is chosen, branch off into a different bank of questions 




`WHEN I decide to finish building my team`
`THEN I exit the application, and the HTML is generated`
`THEN an HTML file is generated that displays a nicely formatted team roster based on user input`
file create html page 
then imported member info by lop function of team array - for each item, make a card, fill in name/id/email/etc

`WHEN I click on an email address in the HTML THEN my default email program opens and populates the TO field of the email with the address`
    look into sending user to default email program

`WHEN I click on the GitHub username THEN that GitHub profile opens in a new tab`
    send user to new tab using target:_blank







            ** JEST **

It is recommended that you start with a directory structure that looks like the following example:

```md
__tests__/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/				// classes
src/				// template helper code
index.js			// runs the application
```

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.





## Grading Requirements

This homework is graded based on the following criteria: 

### Deliverables: 15%

* A sample HTML file generated using the application must be submitted.

* Your GitHub repository containing your application code.


### Walkthrough Video: 32%

* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must show all four tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated HTML file that matches the user input.


### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

	* Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

  * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description and a link to a walkthrough video.

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests.

* A sample HTML file generated using your application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.