import { LetterWithColour } from "../utils/wordle-guess-interface";

export function PresentEachLetter({
  letter,
  colour,
}: LetterWithColour): JSX.Element {
  return (
    <div className="letter" style={{ backgroundColor: colour }}>
      <h1>{letter}</h1>
    </div>
  );
}
