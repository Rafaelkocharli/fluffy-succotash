export function timestampToString(
  timestamp: number,
  current_timestamp = Math.floor(new Date().getTime() / 1000)
) {
  const date = timestamp;
  const current_date = current_timestamp;
  const diff = current_date - date;
  if (
    !Number.isInteger(diff) ||
    !Number.isInteger(date) ||
    diff < 0 ||
    date < 0
  ) {
    return null;
  }
  if (diff < 60) {
    return "Только что";
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} м. назад`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)} ч. назад`;
  } else if (diff < 86400 * 2) {
    return "Вчера";
  } else if (diff < 86400 * 7) {
    return `${Math.floor(diff / 86400)} д. назад`;
  } else if (diff < 86400 * 28) {
    return `${Math.round(diff / (86400 * 7))} нед. назад`;
  } else if (diff < 31556926) {
    return `${Math.round(diff / (86400 * 28))} мес. назад`;
  } else {
    const years = Math.floor(diff / 31556926);
    if (
      [1, 2, 3, 4].includes(+years.toString().slice(-1)) &&
      (years < 10 || years > 20)
    ) {
      return `${years} г. назад`;
    } else {
      return `${years} лет назад`;
    }
  }
}
