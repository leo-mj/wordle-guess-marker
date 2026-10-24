import { useState, useEffect } from "react";
import { getTodaysDate } from "../utils/playUtils/getTodaysDate";
import { getTodaysSolution } from "../utils/playUtils/getTodaysSolution";
import { GuessInterface } from "../components/play/GuessInterface";
import { PropsMainPages } from "../utils/menu-interfaces";
import { SharedResult } from "../utils/game-interfaces";
import axios from "axios";
import { authHeader, baseURL } from "../utils/databaseURL";

export function PlayWordle({ states }: PropsMainPages): JSX.Element {
  const {
    // selectedPage,
    // setSelectedPage,
    // user,
    // setUser,
    // password,
    // setPassword,
    token,
    loggedIn,
    // setLoggedIn,
  } = states;
  const [todaysSolution, setTodaysSolution] = useState<string>("");
  const todaysDate = getTodaysDate();
  useEffect(() => {
    getTodaysSolution(setTodaysSolution, todaysDate);
  }, [todaysDate]);

  const [solvedStatus, setSolvedStatus] = useState<string>("solving");
  const [sharedResult, setSharedResult] = useState<SharedResult | null>(null);
  useEffect(() => {
    if (loggedIn && solvedStatus !== "solving" && sharedResult) {
      axios.post(
        baseURL + "results/" + todaysDate,
        {
          guesses: sharedResult.guesses,
          solvedStatus: solvedStatus,
          emojis: `${sharedResult.emojis}`,
        },
        authHeader(token)
      );
    }
  }, [loggedIn, token, todaysDate, solvedStatus, sharedResult]);

  return (
    <>
      <GuessInterface
        todaysSolution={todaysSolution}
        sharedResult={sharedResult}
        setSharedResult={setSharedResult}
        solvedStatus={solvedStatus}
        setSolvedStatus={setSolvedStatus}
      />
    </>
  );
}
