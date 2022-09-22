import { MarkedGuess } from "../../utils/game-interfaces";
import { CurrentGuess } from "./CurrentGuess";
import { ShowEmptyRow } from "./ShowEmptyRow";
import { OneGuess } from "./OneGuess";

interface PropsShowAllResults {
  allResults: MarkedGuess[];
  guessInput: string;
}

export function ShowAllResults({
  allResults,
  guessInput,
}: PropsShowAllResults): JSX.Element {
  const emptyRows: string[][] = [];
  const emptyRow = [" ", " ", " ", " ", " "];
  for (let i = 0; i < 5 - allResults.length; i++) {
    emptyRows.push(emptyRow);
  }

  return (
    <>
      {allResults.map((result, i) => (
        <OneGuess key={i} result={result} />
      ))}
      {allResults.length < 6 &&
        (guessInput.length > 0 ? (
          <CurrentGuess guessInput={guessInput} />
        ) : (
          <ShowEmptyRow row={emptyRow} />
        ))}
      {allResults.length < 5 &&
        emptyRows.map((row, i) => <ShowEmptyRow key={i} row={row} />)}
    </>
  );
}
