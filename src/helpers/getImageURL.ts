import { DATABASE_URL } from "../config";

export function getImageURL(imageName: string) {
  return `${DATABASE_URL}/static/${imageName}`;
}
