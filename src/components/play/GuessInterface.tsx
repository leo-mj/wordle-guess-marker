import { useEffect, useState } from "react";
import { handleSubmitButton } from "../../utils/playUtils/handleSubmitButton";
import { MarkedGuess, SharedResult } from "../../utils/game-interfaces";
import { Keyboard } from "./Keyboard";
import { ShowAllResults } from "./ShowAllResults";
import { resultsAsEmojis } from "../../utils/playUtils/resultsAsEmojis";
import { ShowSharedResult } from "../ShowSharedResult";
import { checkSolvedStatus } from "../../utils/playUtils/checkSolvedStatus";

interface PropsGuessInterface {
  todaysSolution: string;
  sharedResult: SharedResult | null;
  setSharedResult: React.Dispatch<React.SetStateAction<SharedResult | null>>;
  solvedStatus: string;
  setSolvedStatus: React.Dispatch<React.SetStateAction<string>>;
}

export function GuessInterface({
  todaysSolution,
  sharedResult,
  setSharedResult,
  solvedStatus,
  setSolvedStatus,
}: PropsGuessInterface): JSX.Element {
  const [guessInput, setGuessInput] = useState<string>("");

  const [allResults, setAllResults] = useState<MarkedGuess[]>([]);

  useEffect(() => {
    if (allResults && solvedStatus === "solving") {
      checkSolvedStatus(allResults, setSolvedStatus);
    }
    if (solvedStatus !== "solving") {
      const todaysSharedResult: SharedResult = {
        guesses: allResults.length,
        solvedStatus: solvedStatus,
        emojis: resultsAsEmojis(allResults),
      };
      setSharedResult(todaysSharedResult);
    }
  }, [solvedStatus, setSolvedStatus, allResults, setSharedResult]);

  return (
    <>
      {solvedStatus === "solving" && (
        <>
          <div className="inputFields">
            <input
              className="textInput"
              maxLength={5}
              type="text"
              value={guessInput}
              onChange={(e) => {
                setGuessInput(e.target.value.toUpperCase());
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
                  todaysSolution
                );
              }}
            >
              ↩
            </button>
          </div>
        </>
      )}
      {solvedStatus !== "solving" && sharedResult && (
        <>
          <ShowSharedResult
            sharedResult={sharedResult}
            todaysSolution={todaysSolution}
          />
        </>
      )}

      <div className="guessDisplay">
        <ShowAllResults allResults={allResults} guessInput={guessInput} />
      </div>

      {solvedStatus === "solving" && (
        <div className="keyboard">
          <Keyboard
            guessInput={guessInput}
            setGuessInput={setGuessInput}
            allResults={allResults}
            setAllResults={setAllResults}
            todaysSolution={todaysSolution}
          />
        </div>
      )}
    </>
  );
}
