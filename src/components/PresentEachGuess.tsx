import markWordle from "../utils/mark-wordle";
import { LetterWithColour, MarkedGuess } from "../utils/wordle-guess-interface";
import { PresentEachLetter } from "./PresentEachLetter";

interface IPresentEachGuess {
  guess: string;
  solution: string;
  setSolvedStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PresentEachGuess({
  guess,
  solution,
  setSolvedStatus,
}: IPresentEachGuess): JSX.Element {
  const result: MarkedGuess = markWordle(guess, solution);
  const resultAsArray: LetterWithColour[] = [];
  for (let i = 0; i < 5; i++) {
    resultAsArray.push(result[i]);
  }
  if (guess.toUpperCase() === solution.toUpperCase()) {
    setSolvedStatus(true);
  }
  return (
    <body className="allGuesses">
      {resultAsArray.map((element: LetterWithColour, i: number) => (
        <PresentEachLetter
          key={i}
          letter={element.letter}
          colour={element.colour}
        />
      ))}
    </body>
  );
}
