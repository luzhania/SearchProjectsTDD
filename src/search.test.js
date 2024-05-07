import searchProject from "./search.js";

describe("Search", () => {
  it("shouldn't find projects when there's no one in the project list", () => {
    let projects = [];
    expect(searchProject("Saludador", projects)).toEqual("");
  });
  it("should find one project when there's in the list with only 1 project", () => {
    let projects = [];
    projects.push("Saludador");
    expect(searchProject("Saludador", projects)).toEqual("Saludador");
  });
});
