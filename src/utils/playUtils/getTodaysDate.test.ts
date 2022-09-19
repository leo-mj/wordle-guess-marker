import { getTodaysDate } from "./getTodaysDate";

test("getTodaysDate returns a string that is 10 characters long and that ends with 202-something", () => {
  const testDate = getTodaysDate();
  expect(testDate.length).toBe(10);
  expect(testDate.substring(6, 9)).toBe("202");
});
