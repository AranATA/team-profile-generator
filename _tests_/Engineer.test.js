const Engineer = require("./lib/Engineer");

describe("Engineer", () => {
  it("should instantiate Engineer instances", () => {
    const obj = new Engineer();
    expect(typeof(obj)).toBe("object");
  });
});

describe("Engineer", () => {
  it("should initialize github as a property", () => {
    const gitHubUsername = "ata";
    const obj = new Engineer("Ali", 44, "ali@gmail.com", gitHubUsername);
    expect(obj.github).toBe(gitHubUsername);
  });
}); 
    
describe("getGithub", () => {
  it("should return the value of the github property", () => {
    const obj = new Engineer("Ali", 44, "ali@gmail.com", "ata");
    expect(obj.getGithub).toBe(obj.github);
  });
});

describe("getRole", () => {
  it("should return the set value for the getRole method in the Engineer class", () => {
    const obj = new Engineer("Ali", 44, "ali@gmail.com", "ata");
    expect(obj.getRole).toBe("Engineer");
  });
});