import { useState } from "react";
import { PresentEachGuess } from "./components/PresentEachGuess";
import { handleSubmitButton } from "./utils/handleSubmitButton";

function App(): JSX.Element {
  const [guessInput, setGuessInput] = useState<string>("");
  const [allGuesses, setAllGuesses] = useState<string[]>([]);
  const [solvedStatus, setSolvedStatus] = useState<boolean>(false);
  const solution = "eumel";

  return (
    <>
      <div className="topHalf">
        {solvedStatus === false ? (
          <>
            {allGuesses.length < 6 ? (
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
                      allGuesses,
                      setAllGuesses
                    );
                  }}
                >
                  Submit
                </button>
              </div>
            ) : (
              <h1 className="solutionMessage">
                Too bad, loser! The solution was: {solution}
              </h1>
            )}{" "}
          </>
        ) : (
          <h1 className="solutionMessage">Congratulations!</h1>
        )}
      </div>

      <main className="guessDisplay">
        {allGuesses.map((guess: string, i: number) => (
          <PresentEachGuess
            key={i}
            guess={guess}
            solution={solution}
            setSolvedStatus={setSolvedStatus}
          />
        ))}
      </main>
    </>
  );
}

export default App;
