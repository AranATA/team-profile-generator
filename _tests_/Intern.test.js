const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should instantiate Intern instances", () => {
    const obj = new Intern();
    expect(typeof(obj)).toBe("object");
  });
});

describe("Intern", () => {
  it("should initialize school as a property", () => {
    const schoolGraduated = "UNC";
    const obj = new Intern("Ali", 44, "ali@gmail.com", schoolGraduated);
    expect(obj.school).toBe(schoolGraduated);
  });
}); 
    
describe("getSchool", () => {
  it("should return the value of the school property", () => {
    const obj = new Intern("Ali", 44, "ali@gmail.com", "UNC");
    expect(obj.getSchool()).toBe(obj.school);
  });
});

describe("getRole", () => {
  it("should return the set value for the getRole method in the Intern class", () => {
    const obj = new Intern("Ali", 44, "ali@gmail.com", "UNC");
    expect(obj.getRole()).toBe("Intern");
  });
});