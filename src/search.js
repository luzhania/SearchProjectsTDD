function searchProject(projectName, projectList) {
  if (projectList.length === 0) {
    return "";
  }
  if (projectList[0] === projectName) {
    return projectList[0];
  }
}

export default searchProject;
