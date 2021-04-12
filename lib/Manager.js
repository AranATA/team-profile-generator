const Employee = require("./Employee");

class Manager extends Employee {
  constructor(empName, id, email, officeNumber) {
    super (empName, id, email);
    
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;