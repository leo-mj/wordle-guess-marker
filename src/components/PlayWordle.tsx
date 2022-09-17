import { useState, useEffect } from "react";
import { getTodaysDate } from "../utils/getTodaysDate";
import { getTodaysSolution } from "../utils/getTodaysSolution";
import { GuessInterface } from "./GuessInterface";

export function PlayWordle(): JSX.Element {
  const [todaysSolution, setTodaysSolution] = useState<string>("");
  const todaysDate = getTodaysDate();
  useEffect(() => {
    getTodaysSolution(setTodaysSolution, todaysDate);
  }, [todaysDate]);

  return (
    <>
      <GuessInterface todaysSolution={todaysSolution} />
    </>
  );
}
