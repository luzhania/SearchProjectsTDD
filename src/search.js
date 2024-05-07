function searchProject(projectName, projectList) {
  if (projectList.length === 0) {
    return "";
  }
  for (const actualProject in projectList) {
    if (projectList[actualProject] === projectName) {
      return projectList[actualProject];
    }
  }
  return "";
}

export default searchProject;
