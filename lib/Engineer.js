const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(empName, id, email, githubUsername) {
    super (empName, id, email);
    
    this.github = githubUsername;
    this.title = "Engineer"
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.title;
  }
}
module.exports = Engineer;