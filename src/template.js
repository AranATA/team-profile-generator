const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// every element to be stored in the teamList array will be a class generated object with all the properties and methods they inherit from it  
let teamList = [];
console.log(teamList);

// team manager
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "empName",
        message: "Team manager's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Team manager's id:",
      },
      {
        type: "input",
        name: "email",
        message: "Team manager's email:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Team manager's office number:",
      },
    ])

// ALT1: longer way of doing things: assigning variables to properties
    .then(function (data) {

      const empName = data.empName;
      const id = data.id;
      const email = data.email;
      const officeNumber = data.officeNumber;
      
      const teamMember = new Manager(empName, id, email, officeNumber);
      teamList.push(teamMember)
      teamStatusCheck();

    });
}

// other team members
function teamStatusCheck() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "empRole",
        message: "Would you add a member to your team?",
        choices: ["Engineer", "Intern", "No, team has been built"],
      }
    ])

    .then(function (data) {
      switch (data.empRole) {

        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        case "No, team has been built":
          callTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "empName",
        message: "Employee's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Employee's id:",
      },
      {
        type: "input",
        name: "email",
        message: "Employee's email:",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "Employee's GitHub username:",
      },
    ])

// ALT2: taking advantage of the predefined class properties: 
    .then(function (data) {

      const teamMember = new Engineer(data.empName, data.id, data.email, data.githubUsername);
      teamList.push(teamMember)
      teamStatusCheck();

    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "empName",
        message: "Employee's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Employee's id:",
      },
      {
        type: "input",
        name: "email",
        message: "Employee's email:",
      },
      {
        type: "input",
        name: "school",
        message: "Employee's school name:",
      },
    ])

// ALT3: with the object deconstructing syntax:     
    .then(function (data) {

      const {empName, id, email, school} = data
      const teamMember = new Intern(empName, id, email, school);
      teamList.push(teamMember)
      teamStatusCheck();

    });
}

function callTeam() {
  console.log("Let's call your team!")
  const htmlString = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="author" content="Ghibli">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="./images/favicon.ico" rel="shortcut icon">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600&family=Merriweather:wght@300;400;700;900&family=Nunito:wght@200;300;400;600&family=PT+Sans:wght@400;700&family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
  <title>Home | My Team</title>
</head>

<body>
  <header>
    <h1>Team Members Profile</h1>
  </header>
  <main>
   <section class="row">
    ${card()}
   </section>
  </main>
</body>

</html>
`
  fs.writeFile(
    path.join(__dirname,"../dist","myteam.html"), htmlString,
    err => {
      if(err) throw err;
      console.log("Successfully created your file in the dist folder!")
  })
}

const card = () => {

  const htmlStringSet = [];

  for (let i = 0; i < teamList.length; i++) {
    let htmlStringTwo = `
    <div class="member">
      <div>
        <h2>${teamList[i].getEmpName()}</h2>
        <h3>"${teamList[i].getRole()}"</h3>
      </div>
      <div>
        <p>Employee ID: ${teamList[i].getId()}</p>
        <p>Email: <a href="mailto:${teamList[i].getEmail()}">${teamList[i].getEmail()}</a></p>
      `
    if (teamList[i].officeNumber) {
      htmlStringTwo += `
        <p>Office number: ${teamList[i].getOfficeNumber()}</p>
        `
    }
    if (teamList[i].github) {
      htmlStringTwo += `
        <p>GitHub: <a href="https://github.com/${teamList[i].getGithub()}">${teamList[i].getGithub()}</a></p>
        `
    }
    if (teamList[i].school) {
      htmlStringTwo += `
        <p>School: ${teamList[i].getSchool()}</p>
        `
    }

    htmlStringTwo += `
      </div>
    </div>
    `
    htmlStringSet.push(htmlStringTwo);
  }

  const html = htmlStringSet.join("");
  return html;
}

const generateTeamProfile = {
  message: function() {console.log("Please answer the following questions:")},
  init: function() {addManager()} 
};

module.exports = generateTeamProfile;
