export function exportProjectsCode(projects) {
  const projectsCode = `export const initialProjects = ${JSON.stringify(projects, null, 2)};`;
  return projectsCode;
}
