import { useState, useEffect } from "react";
import { getTodaysDate } from "../utils/getTodaysDate";
import { getTodaysSolution } from "../utils/getTodaysSolution";
import { GuessInterface } from "./GuessInterface";

interface IGuessInterface {
  setGuessing: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PlayWordle({ setGuessing }: IGuessInterface): JSX.Element {
  const [todaysSolution, setTodaysSolution] = useState<string>("");
  const todaysDate = getTodaysDate();
  useEffect(() => {
    getTodaysSolution(setTodaysSolution, todaysDate);
  }, [todaysDate]);

  return (
    <>
      <button onClick={() => setGuessing(false)}>Back to main menu</button>
      <GuessInterface todaysSolution={todaysSolution} />
    </>
  );
}
