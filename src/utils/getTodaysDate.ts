export function getTodaysDate(): string {
  const fullDate = new Date();
  let date = `${fullDate.getDate()}`;
  if (date.length === 1) {
    date = "0" + date;
  }
  let month = `${fullDate.getMonth() + 1}`;
  if (month.length === 1) {
    month = "0" + month;
  }
  const year = fullDate.getFullYear();
  return `${date}-${month}-${year}`;
}
