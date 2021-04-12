const Employee = require("./lib/Employee");

describe("Employee", () => {
  it("should instantiate Employee instances", () => {
    const obj = new Employee();
    expect(typeof(obj)).toBe("object");
  });
});

describe("Employee", () => {
  it("should initialize empName as a property", () => {
    const employeeName = Ali;
    const obj = new Employee(employeeName);
    expect(obj.empName).toBe(employeeName);
  });
}); 
    
describe("Employee", () => {
  it("should initialize id as a property", () => {
    const idNumber = 44;
    const obj = new Employee(John, idNumber);
    expect(obj.id).toBe(idNumber);
  });
}); 

