import { timestampToString } from "./timestampToString";

describe("timestampToString function positive testing", () => {
  test("number up to day", () => {
    expect(timestampToString(1722099345, 1722099355)).toBe("Только что");
    expect(timestampToString(1722098765, 1722099355)).toBe("9 м. назад");
    expect(timestampToString(1722095755, 1722099355)).toBe("1 ч. назад");
    expect(timestampToString(1722059255, 1722099355)).toBe("11 ч. назад");
    expect(timestampToString(1722014455, 1722099355)).toBe("23 ч. назад");
    expect(timestampToString(1722014455, 1722100855)).toBe("Вчера");
  });
  test("number from day to year", () => {
    expect(timestampToString(1721868255, 1722100855)).toBe("2 д. назад");
    expect(timestampToString(1721499855, 1722100855)).toBe("6 д. назад");
    expect(timestampToString(1720899855, 1722100855)).toBe("2 нед. назад");
    expect(timestampToString(1719499855, 1722100855)).toBe("1 мес. назад");
  });
  test("number from 1 year", () => {
    expect(timestampToString(1609459200, 1722100855)).toBe("3 г. назад");
    expect(timestampToString(1577836800, 1722100855)).toBe("4 г. назад");
    expect(timestampToString(1546300800, 1722100855)).toBe("5 лет назад");
    expect(timestampToString(1514784000, 1722100855)).toBe("6 лет назад");
    expect(timestampToString(1262304000, 1722100855)).toBe("14 лет назад");
  });
});

describe('"timestampToString function negative testing"', () => {
  test("fractional number", () => {
    expect(timestampToString(423.5, 324)).toBeNull();
    expect(timestampToString(423, 324.2)).toBeNull();
    expect(timestampToString(423.5, 324.1)).toBeNull();
  });
  test("negative numbers", () => {
    expect(timestampToString(-423, 324)).toBeNull();
    expect(timestampToString(423, -324)).toBeNull();
    expect(timestampToString(-423.5, -324.1)).toBeNull();
  });
});
