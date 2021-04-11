const Employee = require("./Employee");

class Manager extends Employee {
  constructor(empName, id, email, officeNumber) {
    super (empName, id, email);
    
    this.officeNumber = officeNumber;
    this.title = "Manager"
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.title;
  }
}
module.exports = Manager;