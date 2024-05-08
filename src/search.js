function isEmptyList(projectList) {
  return projectList.length === 0;
}

function searchProject(projectName, projectList) {
  if (isEmptyList(projectList)) {
    return "";
  }

  let searchedProjects = projectList.filter(project => project.includes(projectName));

  if (isEmptyList(searchedProjects)) {
    return "";
  }

  return searchedProjects.join(", ");
}

export default searchProject;
