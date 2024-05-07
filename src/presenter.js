import searchProject from "./search.js";

const searchedProjectNameInput = document.querySelector("#project-name");
const searchedProjectForm = document.querySelector("#search-project-form");
const div = document.querySelector("#result-div");

let projects = [];

searchedProjectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchedProjectName = searchedProjectNameInput.value;

  div.innerHTML = "<p>" + searchProject(searchedProjectName, projects) + "</p>";
});
