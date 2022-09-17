import { MarkedGuess } from "../utils/interfaces";
import { OneGuess } from "./OneGuess";

interface PropsShowAllResults {
  allResults: MarkedGuess[];
}

export function ShowAllResults({
  allResults,
}: PropsShowAllResults): JSX.Element {
  const emptyRows: string[][] = [];
  for (let i = 0; i < 6 - allResults.length; i++) {
    emptyRows.push([" ", " ", " ", " ", " "]);
  }
  console.log(emptyRows);

  return (
    <>
      {allResults.map((result, i) => (
        <OneGuess key={i} result={result} />
      ))}
      {allResults.length < 6 &&
        emptyRows.map((row, i) => (
          <div className="allRows" key={i}>
            {row.map((cell, j) => (
              <div
                key={j}
                className="letter"
                style={{ backgroundColor: "white", color: "white" }}
              >
                <h1>b</h1>
              </div>
            ))}
          </div>
        ))}
    </>
  );
}
