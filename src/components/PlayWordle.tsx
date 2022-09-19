import { useState, useEffect } from "react";
import { getTodaysDate } from "../utils/playUtils/getTodaysDate";
import { getTodaysSolution } from "../utils/playUtils/getTodaysSolution";
import { GuessInterface } from "./play/GuessInterface";

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
