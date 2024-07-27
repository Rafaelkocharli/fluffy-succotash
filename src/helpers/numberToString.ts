export function numberToString(num: number) {
  if (!Number.isInteger(num) || num < 0) {
    return null;
  }

  if (num < 10 ** 3) {
    return num.toString();
  } else if (num < 10 ** 6) {
    return `${Math.round(num / 10 ** 3)} тыс.`;
  } else if (num < 10 ** 9) {
    return `${Math.round(num / 10 ** 6)} млн.`;
  } else {
    return `${Math.round(num / 10 ** 9)} млрд.`;
  }
}
