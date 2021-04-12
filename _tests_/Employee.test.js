const Employee = require("./lib/Employee");

describe("Employee", () => {
  it("should instantiate Employee instances", () => {
    const obj = new Employee();
    expect(typeof(obj)).toBe("object");
  });
});

describe("Employee", () => {
  it("should initialize empName as a property", () => {
    const employeeName = "Ali";
    const obj = new Employee(employeeName);
    expect(obj.empName).toBe(employeeName);
  });
}); 
    
describe("Employee", () => {
  it("should initialize id as a property", () => {
    const idNumber = 44;
    const obj = new Employee("Ali", idNumber);
    expect(obj.id).toBe(idNumber);
  });
}); 

describe("Employee", () => {
  it("should initialize email as a property", () => {
    const emailAddress = "ali@gmail.com";
    const obj = new Employee("Ali", 44, emailAddress);
    expect(obj.email).toBe(emailAddress);
  });
});

describe("getEmpName", () => {
  it("should return the value of the empName property", () => {
    const obj = new Employee("Ali", 44, "ali@gmail.com");
    expect(obj.getEmpName).toBe(obj.name);
  });
});

describe("getId", () => {
  it("should return the value of the id property", () => {
    const obj = new Employee("Ali", 44, "ali@gmail.com");
    expect(obj.getId).toBe(obj.id);
  });
}); 

describe("getEmail", () => {
  it("should return the value of the email property", () => {
    const obj = new Employee("Ali", 44, "ali@gmail.com");
    expect(obj.getEmail).toBe(obj.email);
  });
});

describe("getRole", () => {
  it("should return the set value for the getRole method in the Employee class", () => {
    const obj = new Employee("Ali", 44, "ali@gmail.com");
    expect(obj.getRole).toBe("Employee");
  });
}); 