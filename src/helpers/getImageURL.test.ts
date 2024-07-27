import { DATABASE_URL } from "../config";
import { getImageURL } from "./getImageURL";
describe("getImageURL function testing", () => {
  test("base test", () => {
    const testImage = "testImage.jpg";
    expect(getImageURL(testImage)).toBe(DATABASE_URL + "/static/" + testImage);
  });
});
