import { useState, useEffect } from "react";
import { getTodaysDate } from "../utils/playUtils/getTodaysDate";
import { getTodaysSolution } from "../utils/playUtils/getTodaysSolution";
import { GuessInterface } from "../components/play/GuessInterface";
import { PropsMainPages } from "../utils/menu-interfaces";

export function PlayWordle({ states }: PropsMainPages): JSX.Element {
  const {
    selectedPage,
    setSelectedPage,
    user,
    setUser,
    password,
    setPassword,
    loggedIn,
    setLoggedIn,
  } = states;
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
