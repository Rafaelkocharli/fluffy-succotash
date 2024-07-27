export function getImage(imageName: string) {
  const SERVER_URL = "http://0.0.0.0";
  return `${SERVER_URL}/static/${imageName}`;
}
