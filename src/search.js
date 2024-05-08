function searchProject(projectName, projectList) {
  let searchedProjects = [];
  if (projectList.length === 0) {
    return "";
  }
  for (const actualProject in projectList) {
    if (projectList[actualProject].includes(projectName)) {
      searchedProjects.push(projectList[actualProject]);
    }
  }
  if (searchedProjects.length === 0) {
    return "";
  }
  return searchedProjects.join(", ");
}

export default searchProject;
