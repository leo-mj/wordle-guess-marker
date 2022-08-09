import { LetterWithColour } from "../utils/wordle-guess-interface";

export function ResultPresenter({
  letter,
  colour,
}: LetterWithColour): JSX.Element {
  return (
    <div className="guessDisplay">
      <h1 style={{ backgroundColor: colour }}>{letter}</h1>
    </div>
  );
}
