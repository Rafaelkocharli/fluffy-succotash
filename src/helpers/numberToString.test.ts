import { numberToString } from "./numberToString";

describe("numberToString function positive testing", () => {
  test("numbers up to 1000", () => {
    expect(numberToString(0)).toBe("0");
    expect(numberToString(123)).toBe("123");
    expect(numberToString(954)).toBe("954");
  });
  test("numbers from 1000 to 1000000", () => {
    expect(numberToString(1000)).toBe("1 тыс.");
    expect(numberToString(1395)).toBe("1 тыс.");
    expect(numberToString(1500)).toBe("2 тыс.");
    expect(numberToString(4500)).toBe("5 тыс.");
    expect(numberToString(4940)).toBe("5 тыс.");
    expect(numberToString(42389)).toBe("42 тыс.");
    expect(numberToString(985884)).toBe("986 тыс.");
  });
  test("numbers from 1000000 to 1000000000", () => {
    expect(numberToString(1000000)).toBe("1 млн.");
    expect(numberToString(1342555)).toBe("1 млн.");
    expect(numberToString(2853989)).toBe("3 млн.");
    expect(numberToString(134255554)).toBe("134 млн.");
    expect(numberToString(987434232)).toBe("987 млн.");
  });
  test("numbers from 1000000000", () => {
    expect(numberToString(1000000000)).toBe("1 млрд.");
    expect(numberToString(1000000000000)).toBe("1000 млрд.");
    expect(numberToString(142394823498423)).toBe("142395 млрд.");
  });
});

describe("numberToString function negative testing", () => {
  test("fractionals numbers", () => {
    expect(numberToString(1.432)).toBeNull();
    expect(numberToString(-1.432)).toBeNull();
    expect(numberToString(142342.04)).toBeNull();
    expect(numberToString(-142342.04)).toBeNull();
  });
  test("negative numbers", () => {
    expect(numberToString(-543)).toBeNull();
    expect(numberToString(-3.141592)).toBeNull();
  });
});
