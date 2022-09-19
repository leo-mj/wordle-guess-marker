import { LetterWithColour, MarkedGuess } from "../../utils/game-interfaces";

interface PropsOneGuess {
  result: MarkedGuess;
}

export function OneGuess({ result }: PropsOneGuess): JSX.Element {
  const currentResultAsArray: LetterWithColour[] = [];
  for (let i = 0; i < 5; i++) {
    currentResultAsArray.push(result[i]);
  }
  return (
    <div className="allRows">
      {currentResultAsArray.map((result: LetterWithColour, i: number) => (
        <div
          key={i}
          className="letter"
          style={{ backgroundColor: result.colour }}
        >
          <h1>{result.letter}</h1>
        </div>
      ))}
    </div>
  );
}
