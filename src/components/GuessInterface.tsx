import { useState } from "react";
import { handleSubmitButton } from "../utils/handleSubmitButton";
import { MarkedGuess } from "../utils/interfaces";
import { ShowAllResults } from "./ShowAllResults";

interface PropsGuessInterface {
  todaysSolution: string;
}

export function GuessInterface({
  todaysSolution,
}: PropsGuessInterface): JSX.Element {
  const [guessInput, setGuessInput] = useState<string>("");

  const [allResults, setAllResults] = useState<MarkedGuess[]>([]);

  const [solvedStatus, setSolvedStatus] = useState<string>("solving");
  if (solvedStatus !== "solved" && allResults.length === 6) {
    setSolvedStatus("failed");
  }

  return (
    <>
      <div className="topHalf">
        {solvedStatus === "solving" && (
          <>
            <div className="inputFields">
              <input
                className="textInput"
                maxLength={5}
                type="text"
                value={guessInput}
                onChange={(e) => {
                  setGuessInput(e.target.value);
                }}
                placeholder="type Wordle guess"
              />
              <button
                className="submitButton"
                onClick={() => {
                  handleSubmitButton(
                    guessInput,
                    setGuessInput,
                    allResults,
                    setAllResults,
                    todaysSolution,
                    setSolvedStatus
                  );
                }}
              >
                Submit
              </button>
            </div>
          </>
        )}
        {solvedStatus === "solved" && (
          <h1 className="solutionMessage">Congratulations!</h1>
        )}
        {solvedStatus === "failed" && (
          <h1 className="solutionMessage">
            Too bad, loser! The solution was: {todaysSolution}
          </h1>
        )}
      </div>

      <div className="guessDisplay">
        <ShowAllResults allResults={allResults} />
      </div>
    </>
  );
}
