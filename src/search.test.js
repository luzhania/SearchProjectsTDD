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
  it("should find one project when there's in the list with many projects", () => {
    let projects = [];
    projects.push("Saludador");
    projects.push("Fizz buzz");
    projects.push("Calculadora");
    expect(searchProject("Fizz buzz", projects)).toEqual("Fizz buzz");
  });
  it("shouldn't find projects when there is no match in the projects list", () => {
    let projects = [];
    projects.push("Saludador");
    projects.push("Fizz buzz");
    projects.push("Calculadora");
    expect(searchProject("Bowling kata", projects)).toEqual("");
  });
  it("should find many projects when there are more than one match in the projects list", () => {
    let projects = [];
    projects.push("Saludador");
    projects.push("Calculador");
    projects.push("Fizz buzz");
    projects.push("Calculador");
    projects.push("Calculador");
    expect(searchProject("Calculador", projects)).toEqual("Calculador, Calculador, Calculador");
  });
  it("should find many projects whose name begins with the search criteria", () => {
    let projects = [];
    projects.push("Saludador");
    projects.push("Calculadora");
    projects.push("Fizz buzz");
    projects.push("Calculador de impuestos");
    projects.push("Bowling kata");
    projects.push("Calculador de descuentos");
    expect(searchProject("Calcu", projects)).toEqual("Calculadora, Calculador de impuestos, Calculador de descuentos");
  });
});
