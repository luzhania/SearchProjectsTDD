import searchProject from "./search.js";

describe("Search", () => {
  it("shouldn't find projects when there's no one in the project list", () => {
    let projects = [];
    expect(searchProject("Saludador", projects)).toEqual("");
  });
});
