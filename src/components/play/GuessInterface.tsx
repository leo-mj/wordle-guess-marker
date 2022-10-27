import { useEffect, useState } from "react";
import { handleSubmitButton } from "../../utils/playUtils/handleSubmitButton";
import { MarkedGuess, SharedResult } from "../../utils/game-interfaces";
import { Keyboard } from "./Keyboard";
import { ShowAllResults } from "./ShowAllResults";
import { resultsAsEmojis } from "../../utils/playUtils/resultsAsEmojis";
import { ShowSharedResult } from "./ShowSharedResult";
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

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

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
      {solvedStatus === "solving" && windowSize.innerWidth > 1200 && (
        <>
          <div className="inputFields">
            <input
              maxLength={5}
              type="text"
              value={guessInput}
              onChange={(e) => {
                setGuessInput(e.target.value.toUpperCase());
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSubmitButton(
                    guessInput,
                    setGuessInput,
                    allResults,
                    setAllResults,
                    todaysSolution
                  );
                }
              }}
              placeholder="type Wordle guess"
            />
            <button
              onClick={() =>
                handleSubmitButton(
                  guessInput,
                  setGuessInput,
                  allResults,
                  setAllResults,
                  todaysSolution
                )
              }
              style={{
                boxShadow: guessInput.length === 5 ? "4px 4px #e0fbfc" : "",
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

     
        <div className="keyboard">
          <Keyboard
            guessInput={guessInput}
            setGuessInput={setGuessInput}
            allResults={allResults}
            setAllResults={setAllResults}
            todaysSolution={todaysSolution}
          />
        </div>
    </>
  );
}
