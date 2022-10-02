import { green, yellow, grey, MarkedGuess } from "../game-interfaces";

export function keyColour(
  keyLetter: string,
  allResults: MarkedGuess[]
): string {
  const defaultColour = "#2b2d42";

  const letterWasGuessedGreen = allResults.some((row) =>
    includesLetterAndColour(row, green, keyLetter)
  );
  if (letterWasGuessedGreen) {
    return green;
  }

  const letterWasGuessedYellow = allResults.some((row) =>
    includesLetterAndColour(row, yellow, keyLetter)
  );
  if (letterWasGuessedYellow) {
    return yellow;
  }

  const letterWasGuessedGrey = allResults.some((row) =>
    includesLetterAndColour(row, grey, keyLetter)
  );
  if (letterWasGuessedGrey) {
    return grey;
  }

  return defaultColour;
}

function includesLetterAndColour(
  row: MarkedGuess,
  targetColour: string,
  keyLetter: string
): boolean {
  for (let i = 0; i < 5; i++) {
    if (row[i].letter === keyLetter && row[i].colour === targetColour) {
      return true;
    }
  }
  return false;
}
