const Employee = require("./Employee");

class Intern extends Employee {
  constructor(empName, id, email,school) {
    super (empName, id, email);
    
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
module.exports = Intern;