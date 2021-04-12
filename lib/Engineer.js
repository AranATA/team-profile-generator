const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(empName, id, email, githubUsername) {
    super (empName, id, email);
    
    this.github = githubUsername;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;