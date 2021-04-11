const Employee = require("./Employee");

class Intern extends Employee {
  constructor(empName, id, email,school) {
    super (empName, id, email);
    
    this.school = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.title;
  }
}
module.exports = Intern;