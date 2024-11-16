export function getProjectImageLink(
  projectId: string,
  imageUrl: string,
) {
  return (
    "https://image.gdgyonsei.moveto.kr/projects/" + projectId + "/" + imageUrl
  );
}

export function getProjectLink(
    projectId: string
  ) {
    return (
      "/projects/" + projectId
    );
  }