import { useState } from "react";
import { ResultPresenter } from "./components/ResultPresenter";
import markWordle from "./utils/mark-wordle";
import { LetterWithColour, MarkedGuess } from "./utils/wordle-guess-interface";

function App(): JSX.Element {
  const [guess, setGuess] = useState<string>("");
  const solution = "eumel";
  const result: MarkedGuess = markWordle(guess, solution);
  const resultAsArray: LetterWithColour[] = [];
  for (let i = 0; i < 5; i++) {
    resultAsArray.push(result[i]);
  }
  return (
    <>
      <input
        maxLength={5}
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="type Wordle guess"
      />
      <body className="allGuesses">
        {resultAsArray.map((element: LetterWithColour, i: number) => (
          <ResultPresenter
            key={i}
            letter={element.letter}
            colour={element.colour}
          />
        ))}
      </body>
    </>
  );
}

export default App;
